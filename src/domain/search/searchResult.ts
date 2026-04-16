import { RedmineSearchResult } from "@/domain/search/redmineSearchResult";

export interface SearchResultResponse {
  results: RedmineSearchResult[];
  total_count: number;
  offset: number;
  limit: number;
}
