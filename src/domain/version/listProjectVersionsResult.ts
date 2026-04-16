import { RedmineVersion } from "@/domain/version/redmineVersion";

export interface ListProjectVersionsResult {
  versions: RedmineVersion[];
  total_count: number;
}
