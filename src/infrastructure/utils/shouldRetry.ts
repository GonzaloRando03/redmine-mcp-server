import { RedmineAPIError } from "@/domain/errors/redmineApiError";
import { RedmineErrorType } from "@/domain/errors/redmineErrorType";

export function shouldRetry(error: unknown): boolean {
  if (!(error instanceof RedmineAPIError)) return false;
  return [
    RedmineErrorType.NETWORK_ERROR,
    RedmineErrorType.RATE_LIMITED,
    RedmineErrorType.SERVER_ERROR,
  ].includes(error.type);
}
