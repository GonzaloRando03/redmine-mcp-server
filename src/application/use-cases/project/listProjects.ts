import { ProjectService } from "@/application/services/projectService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListProjectsParams } from "@/domain/project/listProjectsParams";
import { ListProjectsResult } from "@/domain/project/listProjectsResult";

export class ListProjects extends BaseUseCase<
  ListProjectsParams | undefined,
  ListProjectsResult
> {
  private projectService: ProjectService;

  constructor(projectService: ProjectService) {
    super();
    this.projectService = projectService;
  }

  override execute(params?: ListProjectsParams): Promise<ListProjectsResult> {
    return this.projectService.listProjects(params);
  }
}
