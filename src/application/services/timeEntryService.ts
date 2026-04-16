import { CreateTimeEntryParams } from "@/domain/time-entry/createTimeEntryParams";
import { GetTimeEntryParams } from "@/domain/time-entry/getTimeEntryParams";
import { ListTimeEntriesParams } from "@/domain/time-entry/listTimeEntriesParams";
import { ListTimeEntriesResult } from "@/domain/time-entry/listTimeEntriesResult";
import { RedmineTimeEntry } from "@/domain/time-entry/redmineTimeEntry";
import { UpdateTimeEntryParams } from "@/domain/time-entry/updateTimeEntryParams";

export interface TimeEntryService {
  listTimeEntries(
    params: ListTimeEntriesParams,
  ): Promise<ListTimeEntriesResult>;
  getTimeEntry(params: GetTimeEntryParams): Promise<RedmineTimeEntry>;
  createTimeEntry(params: CreateTimeEntryParams): Promise<RedmineTimeEntry>;
  updateTimeEntry(params: UpdateTimeEntryParams): Promise<void>;
  deleteTimeEntry(params: { id: number }): Promise<void>;
}
