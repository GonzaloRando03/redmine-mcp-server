import { TimeEntryService } from "@/application/services/timeEntryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListTimeEntriesParams } from "@/domain/time-entry/listTimeEntriesParams";
import { ListTimeEntriesResult } from "@/domain/time-entry/listTimeEntriesResult";

export class ListTimeEntries extends BaseUseCase<
  ListTimeEntriesParams,
  ListTimeEntriesResult
> {
  private timeEntryService: TimeEntryService;

  constructor(timeEntryService: TimeEntryService) {
    super();
    this.timeEntryService = timeEntryService;
  }

  override execute(
    params: ListTimeEntriesParams,
  ): Promise<ListTimeEntriesResult> {
    return this.timeEntryService.listTimeEntries(params);
  }
}
