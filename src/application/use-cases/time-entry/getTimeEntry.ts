import { TimeEntryService } from "@/application/services/timeEntryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetTimeEntryParams } from "@/domain/time-entry/getTimeEntryParams";
import { RedmineTimeEntry } from "@/domain/time-entry/redmineTimeEntry";

export class GetTimeEntry extends BaseUseCase<
  GetTimeEntryParams,
  RedmineTimeEntry
> {
  private timeEntryService: TimeEntryService;

  constructor(timeEntryService: TimeEntryService) {
    super();
    this.timeEntryService = timeEntryService;
  }

  override execute(params: GetTimeEntryParams): Promise<RedmineTimeEntry> {
    return this.timeEntryService.getTimeEntry(params);
  }
}
