import { NewsService } from "@/application/services/newsService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateNewsParams } from "@/domain/news/createNewsParams";
import { RedmineNews } from "@/domain/news/redmineNews";

export class CreateNews extends BaseUseCase<CreateNewsParams, RedmineNews> {
  private newsService: NewsService;

  constructor(newsService: NewsService) {
    super();
    this.newsService = newsService;
  }

  override execute(params: CreateNewsParams): Promise<RedmineNews> {
    return this.newsService.createNews(params);
  }
}
