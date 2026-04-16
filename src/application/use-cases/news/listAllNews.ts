import { NewsService } from "@/application/services/newsService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListAllNewsParams } from "@/domain/news/listAllNewsParams";
import { ListNewsResult } from "@/domain/news/listNewsResult";

export class ListAllNews extends BaseUseCase<
  ListAllNewsParams | undefined,
  ListNewsResult
> {
  private newsService: NewsService;

  constructor(newsService: NewsService) {
    super();
    this.newsService = newsService;
  }

  override execute(params?: ListAllNewsParams): Promise<ListNewsResult> {
    return this.newsService.listAllNews(params);
  }
}
