import { NewsService } from "@/application/services/newsService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateNewsParams } from "@/domain/news/updateNewsParams";

export class UpdateNews extends BaseUseCase<UpdateNewsParams, void> {
  private newsService: NewsService;

  constructor(newsService: NewsService) {
    super();
    this.newsService = newsService;
  }

  override execute(params: UpdateNewsParams): Promise<void> {
    return this.newsService.updateNews(params);
  }
}
