import { BaseUseCase } from "../baseUseCase";
import { TrackerService } from "../../services/trackerService";
import { ListTrackersParams } from "../../../domain/tracker/listTrackersParams";
import { ListTrackersResult } from "../../../domain/tracker/listTrackersResult";

export class ListTrackers extends BaseUseCase<
  ListTrackersParams,
  ListTrackersResult
> {
  constructor(private trackerService: TrackerService) {
    super();
  }
  async execute(params: ListTrackersParams): Promise<ListTrackersResult> {
    return this.trackerService.listTrackers(params);
  }
}
