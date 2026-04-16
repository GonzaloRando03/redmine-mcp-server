import { RedmineGroup } from "@/domain/group/redmineGroup";

export interface ListGroupsResult {
  groups: RedmineGroup[];
  total_count: number;
  offset: number;
  limit: number;
}
