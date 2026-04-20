import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteAgileSprint extends BaseUseCase<
  { project_id: string | number; sprint_id: number },
  void
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(params: {
    project_id: string | number;
    sprint_id: number;
  }): Promise<void> {
    return this.agileSprintService.deleteAgileSprint(params);
  }
}
