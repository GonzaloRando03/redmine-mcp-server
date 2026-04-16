import { TimeEntryService } from "@/application/services/timeEntryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateTimeEntryParams } from "@/domain/time-entry/updateTimeEntryParams";

export class UpdateTimeEntry extends BaseUseCase<UpdateTimeEntryParams, void> {
  private timeEntryService: TimeEntryService;

  constructor(timeEntryService: TimeEntryService) {
    super();
    this.timeEntryService = timeEntryService;
  }

  override execute(params: UpdateTimeEntryParams): Promise<void> {
    return this.timeEntryService.updateTimeEntry(params);
  }
}
