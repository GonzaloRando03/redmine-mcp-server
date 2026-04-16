import { ProjectService } from "@/application/services/projectService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetProjectParams } from "@/domain/project/getProjectParams";
import { RedmineProject } from "@/domain/project/redmineProject";

export class GetProject extends BaseUseCase<GetProjectParams, RedmineProject> {
  private projectService: ProjectService;

  constructor(projectService: ProjectService) {
    super();
    this.projectService = projectService;
  }

  override execute(params: GetProjectParams): Promise<RedmineProject> {
    return this.projectService.getProject(params);
  }
}
