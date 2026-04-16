import { SearchService } from "@/application/services/searchService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { SearchParams } from "@/domain/search/searchParams";
import { SearchResultResponse } from "@/domain/search/searchResult";

export class Search extends BaseUseCase<SearchParams, SearchResultResponse> {
  private searchService: SearchService;

  constructor(searchService: SearchService) {
    super();
    this.searchService = searchService;
  }

  override execute(params: SearchParams): Promise<SearchResultResponse> {
    return this.searchService.search(params);
  }
}
