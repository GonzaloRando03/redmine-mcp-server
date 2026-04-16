import { RedmineNews } from "@/domain/news/redmineNews";

export interface ListNewsResult {
  news: RedmineNews[];
  total_count: number;
  offset: number;
  limit: number;
}
