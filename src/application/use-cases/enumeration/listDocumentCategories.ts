import { BaseUseCase } from "../baseUseCase";
import { EnumerationService } from "../../services/enumerationService";
import { ListDocumentCategoriesParams } from "../../../domain/enumeration/listDocumentCategoriesParams";
import { ListDocumentCategoriesResult } from "../../../domain/enumeration/listDocumentCategoriesResult";

export class ListDocumentCategories extends BaseUseCase<
  ListDocumentCategoriesParams,
  ListDocumentCategoriesResult
> {
  constructor(private enumerationService: EnumerationService) {
    super();
  }
  async execute(
    params: ListDocumentCategoriesParams,
  ): Promise<ListDocumentCategoriesResult> {
    return this.enumerationService.listDocumentCategories(params);
  }
}
