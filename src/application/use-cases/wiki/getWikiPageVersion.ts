import { WikiService } from "@/application/services/wikiService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetWikiPageVersionParams } from "@/domain/wiki/getWikiPageVersionParams";
import { RedmineWikiPage } from "@/domain/wiki/redmineWikiPage";

export class GetWikiPageVersion extends BaseUseCase<
  GetWikiPageVersionParams,
  RedmineWikiPage
> {
  private wikiService: WikiService;

  constructor(wikiService: WikiService) {
    super();
    this.wikiService = wikiService;
  }

  override execute(params: GetWikiPageVersionParams): Promise<RedmineWikiPage> {
    return this.wikiService.getWikiPageVersion(params);
  }
}
