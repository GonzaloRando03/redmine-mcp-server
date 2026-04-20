import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListIssuesBySprintParams } from "@/domain/agile-sprint/listIssuesBySprintParams";
import { ListIssuesResult } from "@/domain/issue/listIssuesResult";

export class ListIssuesBySprint extends BaseUseCase<
  ListIssuesBySprintParams,
  ListIssuesResult
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(
    params: ListIssuesBySprintParams,
  ): Promise<ListIssuesResult> {
    return this.agileSprintService.listIssuesBySprint(params);
  }
}
