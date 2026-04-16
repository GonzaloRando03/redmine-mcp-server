import { BaseUseCase } from "../baseUseCase";
import { CustomFieldService } from "../../services/customFieldService";
import { ListCustomFieldsParams } from "../../../domain/custom-field/listCustomFieldsParams";
import { ListCustomFieldsResult } from "../../../domain/custom-field/listCustomFieldsResult";

export class ListCustomFields extends BaseUseCase<
  ListCustomFieldsParams,
  ListCustomFieldsResult
> {
  constructor(private customFieldService: CustomFieldService) {
    super();
  }
  async execute(
    params: ListCustomFieldsParams,
  ): Promise<ListCustomFieldsResult> {
    return this.customFieldService.listCustomFields(params);
  }
}
