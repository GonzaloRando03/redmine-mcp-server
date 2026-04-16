import { RedmineApiBaseController } from "./redmineApiBaseController";
import { JournalService } from "../../application/services/journalService";
import { UpdateJournalParams } from "../../domain/journal/updateJournalParams";
import { RedmineJournal } from "../../domain/journal/redmineJournal";

export class JournalController
  extends RedmineApiBaseController
  implements JournalService
{
  async updateJournal(params: UpdateJournalParams): Promise<RedmineJournal> {
    const { id, notes } = params;
    return this.request<RedmineJournal>("PUT", `/journals/${id}.json`, {
      journal: { notes },
    });
  }
}
