import { RedmineApiBaseController } from "./redmineApiBaseController";
import { TrackerService } from "../../application/services/trackerService";
import { ListTrackersParams } from "../../domain/tracker/listTrackersParams";
import { ListTrackersResult } from "../../domain/tracker/listTrackersResult";

export class TrackerController
  extends RedmineApiBaseController
  implements TrackerService
{
  async listTrackers(params: ListTrackersParams): Promise<ListTrackersResult> {
    return this.request<ListTrackersResult>("GET", "/trackers.json");
  }
}
