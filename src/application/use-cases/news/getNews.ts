import { NewsService } from "@/application/services/newsService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetNewsParams } from "@/domain/news/getNewsParams";
import { RedmineNews } from "@/domain/news/redmineNews";

export class GetNews extends BaseUseCase<GetNewsParams, RedmineNews> {
  private newsService: NewsService;

  constructor(newsService: NewsService) {
    super();
    this.newsService = newsService;
  }

  override execute(params: GetNewsParams): Promise<RedmineNews> {
    return this.newsService.getNews(params);
  }
}
