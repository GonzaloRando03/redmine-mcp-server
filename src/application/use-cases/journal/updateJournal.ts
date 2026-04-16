import { BaseUseCase } from "../baseUseCase";
import { JournalService } from "../../services/journalService";
import { UpdateJournalParams } from "../../../domain/journal/updateJournalParams";
import { RedmineJournal } from "../../../domain/journal/redmineJournal";

export class UpdateJournal extends BaseUseCase<
  UpdateJournalParams,
  RedmineJournal
> {
  constructor(private journalService: JournalService) {
    super();
  }
  async execute(params: UpdateJournalParams): Promise<RedmineJournal> {
    return this.journalService.updateJournal(params);
  }
}
