import { RedmineAgileSprint } from "@/domain/agile-sprint/redmineAgileSprint";

export interface ListAgileSprintsResult {
  agile_sprints: RedmineAgileSprint[];
  total_count: number;
}
