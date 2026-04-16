import { IssueService } from "@/application/services/issueService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { WatcherParams } from "@/domain/issue/watcherParams";

export class RemoveWatcher extends BaseUseCase<WatcherParams, void> {
  private issueService: IssueService;

  constructor(issueService: IssueService) {
    super();
    this.issueService = issueService;
  }

  override execute(params: WatcherParams): Promise<void> {
    return this.issueService.removeWatcher(params);
  }
}
