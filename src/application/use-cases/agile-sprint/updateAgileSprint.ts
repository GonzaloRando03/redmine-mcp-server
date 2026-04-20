import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateAgileSprintParams } from "@/domain/agile-sprint/updateAgileSprintParams";

export class UpdateAgileSprint extends BaseUseCase<
  UpdateAgileSprintParams,
  void
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(params: UpdateAgileSprintParams): Promise<void> {
    return this.agileSprintService.updateAgileSprint(params);
  }
}
