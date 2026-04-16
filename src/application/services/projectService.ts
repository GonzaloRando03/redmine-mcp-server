import { CreateProjectParams } from "@/domain/project/createProjectParams";
import { GetProjectParams } from "@/domain/project/getProjectParams";
import { ListProjectsParams } from "@/domain/project/listProjectsParams";
import { ListProjectsResult } from "@/domain/project/listProjectsResult";
import { ProjectIdParams } from "@/domain/project/projectIdParams";
import { RedmineProject } from "@/domain/project/redmineProject";
import { UpdateProjectParams } from "@/domain/project/updateProjectParams";

export interface ProjectService {
  listProjects(params?: ListProjectsParams): Promise<ListProjectsResult>;
  getProject(params: GetProjectParams): Promise<RedmineProject>;
  createProject(params: CreateProjectParams): Promise<RedmineProject>;
  updateProject(params: UpdateProjectParams): Promise<void>;
  deleteProject(params: ProjectIdParams): Promise<void>;
  archiveProject(params: ProjectIdParams): Promise<void>;
  unarchiveProject(params: ProjectIdParams): Promise<void>;
}
