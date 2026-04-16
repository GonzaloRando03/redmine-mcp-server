import { RedmineErrorType } from "@/domain/errors/redmineErrorType";

export class RedmineAPIError extends Error {
  type: RedmineErrorType;
  operation?: string;
  statusCode?: number;
  context?: Record<string, unknown>;
  solution?: string;

  constructor(
    message: string,
    type: RedmineErrorType,
    options?: {
      operation?: string;
      statusCode?: number;
      context?: Record<string, unknown>;
      solution?: string;
    },
  ) {
    super(message);
    this.name = "RedmineAPIError";
    this.type = type;
    if (options?.operation !== undefined) this.operation = options.operation;
    if (options?.statusCode !== undefined) this.statusCode = options.statusCode;
    if (options?.context !== undefined) this.context = options.context;
    if (options?.solution !== undefined) this.solution = options.solution;
  }

  override toString(): string {
    let result = `Error: ${this.message}`;
    if (this.operation) result += `\nOperation: ${this.operation}`;
    if (this.statusCode) result += `\nStatus Code: ${this.statusCode}`;
    if (this.solution) result += `\nSolution: ${this.solution}`;
    if (this.context && Object.keys(this.context).length > 0) {
      result += `\nContext: ${JSON.stringify(this.context, null, 2)}`;
    }
    return result;
  }
}
