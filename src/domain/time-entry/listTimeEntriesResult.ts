import { RedmineTimeEntry } from "@/domain/time-entry/redmineTimeEntry";

export interface ListTimeEntriesResult {
  time_entries: RedmineTimeEntry[];
  total_count: number;
  offset: number;
  limit: number;
}
