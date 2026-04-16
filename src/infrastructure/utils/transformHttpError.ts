import { RedmineAPIError } from "@/domain/errors/redmineApiError";
import { RedmineErrorType } from "@/domain/errors/redmineErrorType";

export function transformHttpError(
  error: unknown,
  operation: string,
): RedmineAPIError {
  if (error instanceof RedmineAPIError) return error;

  if (error instanceof Error) {
    const msg = error.message.toLowerCase();
    if (
      msg.includes("econnrefused") ||
      msg.includes("etimedout") ||
      msg.includes("enotfound") ||
      msg.includes("econnreset") ||
      msg.includes("fetch failed") ||
      msg.includes("network")
    ) {
      return new RedmineAPIError(
        error.message,
        RedmineErrorType.NETWORK_ERROR,
        {
          operation,
          solution: "Verify your network connection and the Redmine URL.",
        },
      );
    }

    return new RedmineAPIError(error.message, RedmineErrorType.UNKNOWN_ERROR, {
      operation,
    });
  }

  return new RedmineAPIError(String(error), RedmineErrorType.UNKNOWN_ERROR, {
    operation,
  });
}
