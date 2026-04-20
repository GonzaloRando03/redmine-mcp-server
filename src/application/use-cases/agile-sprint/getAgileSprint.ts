import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetAgileSprintParams } from "@/domain/agile-sprint/getAgileSprintParams";
import { RedmineAgileSprint } from "@/domain/agile-sprint/redmineAgileSprint";

export class GetAgileSprint extends BaseUseCase<
  GetAgileSprintParams,
  RedmineAgileSprint
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(params: GetAgileSprintParams): Promise<RedmineAgileSprint> {
    return this.agileSprintService.getAgileSprint(params);
  }
}
