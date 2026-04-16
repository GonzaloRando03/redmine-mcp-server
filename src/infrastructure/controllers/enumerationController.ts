import { RedmineApiBaseController } from "./redmineApiBaseController";
import { EnumerationService } from "../../application/services/enumerationService";
import { ListIssuePrioritiesParams } from "../../domain/enumeration/listIssuePrioritiesParams";
import { ListIssuePrioritiesResult } from "../../domain/enumeration/listIssuePrioritiesResult";
import { ListTimeEntryActivitiesParams } from "../../domain/enumeration/listTimeEntryActivitiesParams";
import { ListTimeEntryActivitiesResult } from "../../domain/enumeration/listTimeEntryActivitiesResult";
import { ListDocumentCategoriesParams } from "../../domain/enumeration/listDocumentCategoriesParams";
import { ListDocumentCategoriesResult } from "../../domain/enumeration/listDocumentCategoriesResult";

export class EnumerationController
  extends RedmineApiBaseController
  implements EnumerationService
{
  async listIssuePriorities(
    params: ListIssuePrioritiesParams,
  ): Promise<ListIssuePrioritiesResult> {
    return this.request<ListIssuePrioritiesResult>(
      "GET",
      "/enumerations/issue_priorities.json",
    );
  }
  async listTimeEntryActivities(
    params: ListTimeEntryActivitiesParams,
  ): Promise<ListTimeEntryActivitiesResult> {
    return this.request<ListTimeEntryActivitiesResult>(
      "GET",
      "/enumerations/time_entry_activities.json",
    );
  }
  async listDocumentCategories(
    params: ListDocumentCategoriesParams,
  ): Promise<ListDocumentCategoriesResult> {
    return this.request<ListDocumentCategoriesResult>(
      "GET",
      "/enumerations/document_categories.json",
    );
  }
}
