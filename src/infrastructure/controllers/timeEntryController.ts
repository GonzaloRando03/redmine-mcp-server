import { TimeEntryService } from "@/application/services/timeEntryService";
import { CreateTimeEntryParams } from "@/domain/time-entry/createTimeEntryParams";
import { GetTimeEntryParams } from "@/domain/time-entry/getTimeEntryParams";
import { ListTimeEntriesParams } from "@/domain/time-entry/listTimeEntriesParams";
import { ListTimeEntriesResult } from "@/domain/time-entry/listTimeEntriesResult";
import { RedmineTimeEntry } from "@/domain/time-entry/redmineTimeEntry";
import { UpdateTimeEntryParams } from "@/domain/time-entry/updateTimeEntryParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class TimeEntryController
  extends RedmineApiBaseController
  implements TimeEntryService
{
  async listTimeEntries(
    params: ListTimeEntriesParams,
  ): Promise<ListTimeEntriesResult> {
    return this.request<ListTimeEntriesResult>(
      "GET",
      "/time_entries.json",
      params as Record<string, unknown>,
      "List time entries",
    );
  }

  async getTimeEntry(params: GetTimeEntryParams): Promise<RedmineTimeEntry> {
    const raw = await this.request<{ time_entry: RedmineTimeEntry }>(
      "GET",
      `/time_entries/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Get time entry",
    );
    return raw.time_entry;
  }

  async createTimeEntry(
    params: CreateTimeEntryParams,
  ): Promise<RedmineTimeEntry> {
    const raw = await this.request<{ time_entry: RedmineTimeEntry }>(
      "POST",
      "/time_entries.json",
      { time_entry: params },
      "Create time entry",
    );
    return raw.time_entry;
  }

  async updateTimeEntry(params: UpdateTimeEntryParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/time_entries/${encodeURIComponent(id)}.json`,
      { time_entry: fields },
      "Update time entry",
    );
  }

  async deleteTimeEntry(params: { id: number }): Promise<void> {
    await this.request(
      "DELETE",
      `/time_entries/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Delete time entry",
    );
  }
}
