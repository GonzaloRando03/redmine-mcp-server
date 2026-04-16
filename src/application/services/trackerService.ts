import { ListTrackersParams } from "../../domain/tracker/listTrackersParams";
import { ListTrackersResult } from "../../domain/tracker/listTrackersResult";

export interface TrackerService {
  listTrackers(params: ListTrackersParams): Promise<ListTrackersResult>;
}
