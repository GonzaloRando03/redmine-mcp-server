import { TimeEntryService } from "@/application/services/timeEntryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateTimeEntryParams } from "@/domain/time-entry/createTimeEntryParams";
import { RedmineTimeEntry } from "@/domain/time-entry/redmineTimeEntry";

export class CreateTimeEntry extends BaseUseCase<
  CreateTimeEntryParams,
  RedmineTimeEntry
> {
  private timeEntryService: TimeEntryService;

  constructor(timeEntryService: TimeEntryService) {
    super();
    this.timeEntryService = timeEntryService;
  }

  override execute(params: CreateTimeEntryParams): Promise<RedmineTimeEntry> {
    return this.timeEntryService.createTimeEntry(params);
  }
}
