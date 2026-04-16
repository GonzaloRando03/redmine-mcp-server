import { RedmineProject } from "@/domain/project/redmineProject";

export interface ListProjectsResult {
  projects: RedmineProject[];
  total_count: number;
  offset: number;
  limit: number;
}
