import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateAgileSprintParams } from "@/domain/agile-sprint/createAgileSprintParams";
import { RedmineAgileSprint } from "@/domain/agile-sprint/redmineAgileSprint";

export class CreateAgileSprint extends BaseUseCase<
  CreateAgileSprintParams,
  RedmineAgileSprint
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(
    params: CreateAgileSprintParams,
  ): Promise<RedmineAgileSprint> {
    return this.agileSprintService.createAgileSprint(params);
  }
}
