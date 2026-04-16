import { NewsService } from "@/application/services/newsService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListProjectNewsParams } from "@/domain/news/listProjectNewsParams";
import { ListNewsResult } from "@/domain/news/listNewsResult";

export class ListProjectNews extends BaseUseCase<
  ListProjectNewsParams,
  ListNewsResult
> {
  private newsService: NewsService;

  constructor(newsService: NewsService) {
    super();
    this.newsService = newsService;
  }

  override execute(params: ListProjectNewsParams): Promise<ListNewsResult> {
    return this.newsService.listProjectNews(params);
  }
}
