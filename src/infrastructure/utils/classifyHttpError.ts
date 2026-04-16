import { RedmineErrorType } from "@/domain/errors/redmineErrorType";

export function classifyHttpError(status: number): {
  type: RedmineErrorType;
  solution: string;
} {
  switch (true) {
    case status === 401:
      return {
        type: RedmineErrorType.AUTHENTICATION_FAILED,
        solution: "Verify your Redmine API key or credentials.",
      };
    case status === 403:
      return {
        type: RedmineErrorType.AUTHORIZATION_FAILED,
        solution:
          "Insufficient permissions or REST API is disabled in Redmine settings.",
      };
    case status === 404:
      return {
        type: RedmineErrorType.RESOURCE_NOT_FOUND,
        solution: "Verify the resource exists in Redmine.",
      };
    case status === 412:
      return {
        type: RedmineErrorType.VALIDATION_ERROR,
        solution:
          "X-Redmine-Switch-User header refers to non-existent or inactive user.",
      };
    case status === 422:
      return {
        type: RedmineErrorType.VALIDATION_ERROR,
        solution: "Invalid data sent to Redmine. Check required fields.",
      };
    case status === 429:
      return {
        type: RedmineErrorType.RATE_LIMITED,
        solution: "Too many requests. Wait before retrying.",
      };
    case status >= 500:
      return {
        type: RedmineErrorType.SERVER_ERROR,
        solution: "Redmine server error. Retry later.",
      };
    case status === 400:
      return {
        type: RedmineErrorType.VALIDATION_ERROR,
        solution: "Invalid request parameters. Check the values sent.",
      };
    default:
      return {
        type: RedmineErrorType.UNKNOWN_ERROR,
        solution: `Unexpected HTTP error: ${status}`,
      };
  }
}
