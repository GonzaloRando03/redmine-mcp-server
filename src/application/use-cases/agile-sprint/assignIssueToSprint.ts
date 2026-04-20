import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { AssignIssueToSprintParams } from "@/domain/agile-sprint/assignIssueToSprintParams";

export class AssignIssueToSprint extends BaseUseCase<
  AssignIssueToSprintParams,
  void
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(params: AssignIssueToSprintParams): Promise<void> {
    return this.agileSprintService.assignIssueToSprint(params);
  }
}
