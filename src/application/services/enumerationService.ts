import { ListIssuePrioritiesParams } from "../../domain/enumeration/listIssuePrioritiesParams";
import { ListIssuePrioritiesResult } from "../../domain/enumeration/listIssuePrioritiesResult";
import { ListTimeEntryActivitiesParams } from "../../domain/enumeration/listTimeEntryActivitiesParams";
import { ListTimeEntryActivitiesResult } from "../../domain/enumeration/listTimeEntryActivitiesResult";
import { ListDocumentCategoriesParams } from "../../domain/enumeration/listDocumentCategoriesParams";
import { ListDocumentCategoriesResult } from "../../domain/enumeration/listDocumentCategoriesResult";

export interface EnumerationService {
  listIssuePriorities(
    params: ListIssuePrioritiesParams,
  ): Promise<ListIssuePrioritiesResult>;
  listTimeEntryActivities(
    params: ListTimeEntryActivitiesParams,
  ): Promise<ListTimeEntryActivitiesResult>;
  listDocumentCategories(
    params: ListDocumentCategoriesParams,
  ): Promise<ListDocumentCategoriesResult>;
}
