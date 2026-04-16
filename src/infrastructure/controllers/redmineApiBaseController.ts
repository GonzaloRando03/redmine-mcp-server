import { RedmineApiConfig } from "@/domain/config/redmineApiConfig";
import { RedmineAPIError } from "@/domain/errors/redmineApiError";
import { RedmineErrorType } from "@/domain/errors/redmineErrorType";
import { withErrorHandling } from "@/infrastructure/utils/withErrorHandling";
import { classifyHttpError } from "@/infrastructure/utils/classifyHttpError";

export class RedmineApiBaseController {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(config: RedmineApiConfig) {
    this.baseUrl = config.baseUrl.replace(/\/+$/, "");

    this.headers = {
      "Content-Type": "application/json",
    };

    // Configurar autenticación
    if (config.apiKey) {
      this.headers["X-Redmine-API-Key"] = config.apiKey;
    } else if (config.username) {
      const credentials = Buffer.from(
        `${config.username}:${config.password ?? ""}`,
      ).toString("base64");
      this.headers["Authorization"] = `Basic ${credentials}`;
    } else {
      throw new RedmineAPIError(
        "Authentication for Redmine has not been configured",
        RedmineErrorType.CONFIGURATION_ERROR,
        {
          operation: "constructor",
          solution:
            "Provide 'apiKey' or 'username'+'password' in the configuration.",
        },
      );
    }

    // Impersonation
    if (config.impersonate) {
      this.headers["X-Redmine-Switch-User"] = config.impersonate;
    }
  }

  // ===========================================================================
  //  MÉTODO HTTP BASE
  // ===========================================================================

  async requestRaw<T>(
    path: string,
    body: Buffer,
    contentType: string,
    operation?: string,
  ): Promise<T> {
    const op = operation ?? `POST ${path}`;

    return withErrorHandling(op, async () => {
      const url = `${this.baseUrl}${path}`;
      const rawHeaders = { ...this.headers };
      rawHeaders["Content-Type"] = contentType;

      const response = await fetch(url, {
        method: "POST",
        headers: rawHeaders,
        body: new Uint8Array(body),
      });

      if (!response.ok) {
        const { type, solution } = classifyHttpError(response.status);
        let errorMessage = `HTTP ${response.status}`;
        try {
          const errorBody = await response.text();
          if (errorBody) errorMessage += `: ${errorBody}`;
        } catch {
          // Ignorar errores al leer el body
        }
        throw new RedmineAPIError(errorMessage, type, {
          operation: op,
          statusCode: response.status,
          solution,
        });
      }

      const ct = response.headers.get("content-type") ?? "";
      if (ct.includes("application/json")) {
        return (await response.json()) as T;
      }
      return (await response.text()) as T;
    });
  }

  async request<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    params?: Record<string, unknown>,
    operation?: string,
  ): Promise<T> {
    const op = operation ?? `${method} ${path}`;

    return withErrorHandling(op, async () => {
      let url: string;
      const fetchOptions: RequestInit = {
        method,
        headers: { ...this.headers },
      };

      if (method === "GET") {
        const queryString = this.buildQueryString(params);
        url = `${this.baseUrl}${path}${queryString ? `?${queryString}` : ""}`;
      } else if (method === "POST" || method === "PUT") {
        url = `${this.baseUrl}${path}`;
        if (params) {
          fetchOptions.body = JSON.stringify(params);
        }
      } else {
        // DELETE
        url = `${this.baseUrl}${path}`;
      }

      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const { type, solution } = classifyHttpError(response.status);
        let errorMessage = `HTTP ${response.status}`;
        try {
          const errorBody = await response.text();
          if (errorBody) errorMessage += `: ${errorBody}`;
        } catch {
          // Ignorar errores al leer el body
        }
        throw new RedmineAPIError(errorMessage, type, {
          operation: op,
          statusCode: response.status,
          solution,
        });
      }

      // 204 No Content — actualización/eliminación exitosa
      if (response.status === 204) return undefined as T;

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        return (await response.json()) as T;
      }
      return (await response.text()) as T;
    });
  }

  private buildQueryString(params?: Record<string, unknown>): string {
    if (!params) return "";

    const parts: string[] = [];

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue;

      if (Array.isArray(value)) {
        if (value.length > 0) {
          parts.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(value.join(","))}`,
          );
        }
      } else if (typeof value === "boolean") {
        parts.push(`${encodeURIComponent(key)}=${value ? "true" : "false"}`);
      } else {
        parts.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
        );
      }
    }

    return parts.join("&");
  }
}
