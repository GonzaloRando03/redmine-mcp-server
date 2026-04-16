import { ListCustomFieldsParams } from "../../domain/custom-field/listCustomFieldsParams";
import { ListCustomFieldsResult } from "../../domain/custom-field/listCustomFieldsResult";

export interface CustomFieldService {
  listCustomFields(
    params: ListCustomFieldsParams,
  ): Promise<ListCustomFieldsResult>;
}
