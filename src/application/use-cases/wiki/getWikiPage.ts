import { WikiService } from "@/application/services/wikiService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetWikiPageParams } from "@/domain/wiki/getWikiPageParams";
import { RedmineWikiPage } from "@/domain/wiki/redmineWikiPage";

export class GetWikiPage extends BaseUseCase<
  GetWikiPageParams,
  RedmineWikiPage
> {
  private wikiService: WikiService;

  constructor(wikiService: WikiService) {
    super();
    this.wikiService = wikiService;
  }

  override execute(params: GetWikiPageParams): Promise<RedmineWikiPage> {
    return this.wikiService.getWikiPage(params);
  }
}
