import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetIssueAgileDataParams } from "@/domain/agile-sprint/getIssueAgileDataParams";
import { RedmineAgileData } from "@/domain/agile-sprint/redmineAgileData";

export class GetIssueAgileData extends BaseUseCase<
  GetIssueAgileDataParams,
  RedmineAgileData
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(params: GetIssueAgileDataParams): Promise<RedmineAgileData> {
    return this.agileSprintService.getIssueAgileData(params);
  }
}
