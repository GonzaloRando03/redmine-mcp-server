import { SearchService } from "@/application/services/searchService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { SearchInProjectParams } from "@/domain/search/searchInProjectParams";
import { SearchResultResponse } from "@/domain/search/searchResult";

export class SearchInProject extends BaseUseCase<
  SearchInProjectParams,
  SearchResultResponse
> {
  private searchService: SearchService;

  constructor(searchService: SearchService) {
    super();
    this.searchService = searchService;
  }

  override execute(
    params: SearchInProjectParams,
  ): Promise<SearchResultResponse> {
    return this.searchService.searchInProject(params);
  }
}
