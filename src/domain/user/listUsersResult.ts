import { RedmineUser } from "@/domain/user/redmineUser";

export interface ListUsersResult {
  users: RedmineUser[];
  total_count: number;
  offset: number;
  limit: number;
}
