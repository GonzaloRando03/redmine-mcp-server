import { WikiService } from "@/application/services/wikiService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListWikiPagesParams } from "@/domain/wiki/listWikiPagesParams";
import { ListWikiPagesResult } from "@/domain/wiki/listWikiPagesResult";

export class ListWikiPages extends BaseUseCase<
  ListWikiPagesParams,
  ListWikiPagesResult
> {
  private wikiService: WikiService;

  constructor(wikiService: WikiService) {
    super();
    this.wikiService = wikiService;
  }

  override execute(params: ListWikiPagesParams): Promise<ListWikiPagesResult> {
    return this.wikiService.listWikiPages(params);
  }
}
