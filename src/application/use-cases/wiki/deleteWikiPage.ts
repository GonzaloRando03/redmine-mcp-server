import { WikiService } from "@/application/services/wikiService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { DeleteWikiPageParams } from "@/domain/wiki/deleteWikiPageParams";

export class DeleteWikiPage extends BaseUseCase<DeleteWikiPageParams, void> {
  private wikiService: WikiService;

  constructor(wikiService: WikiService) {
    super();
    this.wikiService = wikiService;
  }

  override execute(params: DeleteWikiPageParams): Promise<void> {
    return this.wikiService.deleteWikiPage(params);
  }
}
