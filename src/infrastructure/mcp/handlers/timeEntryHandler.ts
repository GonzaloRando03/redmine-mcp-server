import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateTimeEntryParams } from "@/domain/time-entry/createTimeEntryParams";
import { GetTimeEntryParams } from "@/domain/time-entry/getTimeEntryParams";
import { ListTimeEntriesParams } from "@/domain/time-entry/listTimeEntriesParams";
import { UpdateTimeEntryParams } from "@/domain/time-entry/updateTimeEntryParams";

export async function handleTimeEntry(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listTimeEntries"
    | "getTimeEntry"
    | "createTimeEntry"
    | "updateTimeEntry"
    | "deleteTimeEntry"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_time_entries":
      return c.listTimeEntries.handle(args as unknown as ListTimeEntriesParams);
    case "get_time_entry":
      return c.getTimeEntry.handle(args as unknown as GetTimeEntryParams);
    case "create_time_entry":
      return c.createTimeEntry.handle(args as unknown as CreateTimeEntryParams);
    case "update_time_entry":
      return c.updateTimeEntry.handle(args as unknown as UpdateTimeEntryParams);
    case "delete_time_entry":
      return c.deleteTimeEntry.handle(args as unknown as { id: number });
    default:
      return null;
  }
}
