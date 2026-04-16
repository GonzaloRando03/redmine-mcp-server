import { AppContainer } from "@/infrastructure/mcp/container";
import { UpdateJournalParams } from "@/domain/journal/updateJournalParams";

export async function handleJournal(
  name: string,
  args: Record<string, unknown>,
  c: Pick<AppContainer, "updateJournal">,
): Promise<unknown> {
  switch (name) {
    case "update_journal":
      return c.updateJournal.handle(args as unknown as UpdateJournalParams);
    default:
      return null;
  }
}
