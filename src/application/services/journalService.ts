import { UpdateJournalParams } from "../../domain/journal/updateJournalParams";
import { RedmineJournal } from "../../domain/journal/redmineJournal";

export interface JournalService {
  updateJournal(params: UpdateJournalParams): Promise<RedmineJournal>;
}
