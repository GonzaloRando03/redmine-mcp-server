import { WikiService } from "@/application/services/wikiService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateOrUpdateWikiPageParams } from "@/domain/wiki/createOrUpdateWikiPageParams";
import { RedmineWikiPage } from "@/domain/wiki/redmineWikiPage";

export class CreateOrUpdateWikiPage extends BaseUseCase<
  CreateOrUpdateWikiPageParams,
  RedmineWikiPage
> {
  private wikiService: WikiService;

  constructor(wikiService: WikiService) {
    super();
    this.wikiService = wikiService;
  }

  override execute(
    params: CreateOrUpdateWikiPageParams,
  ): Promise<RedmineWikiPage> {
    return this.wikiService.createOrUpdateWikiPage(params);
  }
}
