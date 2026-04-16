import { BaseUseCase } from "../baseUseCase";
import { EnumerationService } from "../../services/enumerationService";
import { ListTimeEntryActivitiesParams } from "../../../domain/enumeration/listTimeEntryActivitiesParams";
import { ListTimeEntryActivitiesResult } from "../../../domain/enumeration/listTimeEntryActivitiesResult";

export class ListTimeEntryActivities extends BaseUseCase<
  ListTimeEntryActivitiesParams,
  ListTimeEntryActivitiesResult
> {
  constructor(private enumerationService: EnumerationService) {
    super();
  }
  async execute(
    params: ListTimeEntryActivitiesParams,
  ): Promise<ListTimeEntryActivitiesResult> {
    return this.enumerationService.listTimeEntryActivities(params);
  }
}
