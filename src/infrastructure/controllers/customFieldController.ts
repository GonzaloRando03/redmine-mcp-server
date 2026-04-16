import { RedmineApiBaseController } from "./redmineApiBaseController";
import { CustomFieldService } from "@/application/services/customFieldService";
import { ListCustomFieldsParams } from "../../domain/custom-field/listCustomFieldsParams";
import { ListCustomFieldsResult } from "../../domain/custom-field/listCustomFieldsResult";

export class CustomFieldController
  extends RedmineApiBaseController
  implements CustomFieldService
{
  async listCustomFields(
    params: ListCustomFieldsParams,
  ): Promise<ListCustomFieldsResult> {
    return this.request<ListCustomFieldsResult>("GET", "/custom_fields.json");
  }
}
