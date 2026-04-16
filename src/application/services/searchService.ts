import { SearchInProjectParams } from "@/domain/search/searchInProjectParams";
import { SearchParams } from "@/domain/search/searchParams";
import { SearchResultResponse } from "@/domain/search/searchResult";

export interface SearchService {
  search(params: SearchParams): Promise<SearchResultResponse>;
  searchInProject(params: SearchInProjectParams): Promise<SearchResultResponse>;
}
