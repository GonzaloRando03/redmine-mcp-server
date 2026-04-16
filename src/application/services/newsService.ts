import { CreateNewsParams } from "@/domain/news/createNewsParams";
import { GetNewsParams } from "@/domain/news/getNewsParams";
import { ListAllNewsParams } from "@/domain/news/listAllNewsParams";
import { ListNewsResult } from "@/domain/news/listNewsResult";
import { ListProjectNewsParams } from "@/domain/news/listProjectNewsParams";
import { RedmineNews } from "@/domain/news/redmineNews";
import { UpdateNewsParams } from "@/domain/news/updateNewsParams";

export interface NewsService {
  listAllNews(params?: ListAllNewsParams): Promise<ListNewsResult>;
  listProjectNews(params: ListProjectNewsParams): Promise<ListNewsResult>;
  getNews(params: GetNewsParams): Promise<RedmineNews>;
  createNews(params: CreateNewsParams): Promise<RedmineNews>;
  updateNews(params: UpdateNewsParams): Promise<void>;
}
