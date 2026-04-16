import { ProjectService } from "@/application/services/projectService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ProjectIdParams } from "@/domain/project/projectIdParams";

export class ArchiveProject extends BaseUseCase<ProjectIdParams, void> {
  private projectService: ProjectService;

  constructor(projectService: ProjectService) {
    super();
    this.projectService = projectService;
  }

  override execute(params: ProjectIdParams): Promise<void> {
    return this.projectService.archiveProject(params);
  }
}
