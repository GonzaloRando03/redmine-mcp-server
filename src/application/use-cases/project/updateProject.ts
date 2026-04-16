import { ProjectService } from "@/application/services/projectService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateProjectParams } from "@/domain/project/updateProjectParams";

export class UpdateProject extends BaseUseCase<UpdateProjectParams, void> {
  private projectService: ProjectService;

  constructor(projectService: ProjectService) {
    super();
    this.projectService = projectService;
  }

  override execute(params: UpdateProjectParams): Promise<void> {
    return this.projectService.updateProject(params);
  }
}
