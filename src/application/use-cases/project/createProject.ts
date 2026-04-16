import { ProjectService } from "@/application/services/projectService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateProjectParams } from "@/domain/project/createProjectParams";
import { RedmineProject } from "@/domain/project/redmineProject";

export class CreateProject extends BaseUseCase<
  CreateProjectParams,
  RedmineProject
> {
  private projectService: ProjectService;

  constructor(projectService: ProjectService) {
    super();
    this.projectService = projectService;
  }

  override execute(params: CreateProjectParams): Promise<RedmineProject> {
    return this.projectService.createProject(params);
  }
}
