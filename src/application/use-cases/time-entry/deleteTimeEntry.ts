import { TimeEntryService } from "@/application/services/timeEntryService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteTimeEntry extends BaseUseCase<{ id: number }, void> {
  private timeEntryService: TimeEntryService;

  constructor(timeEntryService: TimeEntryService) {
    super();
    this.timeEntryService = timeEntryService;
  }

  override execute(params: { id: number }): Promise<void> {
    return this.timeEntryService.deleteTimeEntry(params);
  }
}
