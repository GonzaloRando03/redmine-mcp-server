import { ProjectService } from "@/application/services/projectService";
import { CreateProjectParams } from "@/domain/project/createProjectParams";
import { GetProjectParams } from "@/domain/project/getProjectParams";
import { ListProjectsParams } from "@/domain/project/listProjectsParams";
import { ListProjectsResult } from "@/domain/project/listProjectsResult";
import { ProjectIdParams } from "@/domain/project/projectIdParams";
import { RedmineProject } from "@/domain/project/redmineProject";
import { UpdateProjectParams } from "@/domain/project/updateProjectParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class ProjectController
  extends RedmineApiBaseController
  implements ProjectService
{
  async listProjects(params?: ListProjectsParams): Promise<ListProjectsResult> {
    return this.request<ListProjectsResult>(
      "GET",
      "/projects.json",
      params as Record<string, unknown>,
      "List projects",
    );
  }

  async getProject(params: GetProjectParams): Promise<RedmineProject> {
    const { id, ...query } = params;
    const raw = await this.request<{ project: RedmineProject }>(
      "GET",
      `/projects/${encodeURIComponent(String(id))}.json`,
      query as Record<string, unknown>,
      "Get project",
    );
    return raw.project;
  }

  async createProject(params: CreateProjectParams): Promise<RedmineProject> {
    const raw = await this.request<{ project: RedmineProject }>(
      "POST",
      "/projects.json",
      { project: params },
      "Create project",
    );
    return raw.project;
  }

  async updateProject(params: UpdateProjectParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/projects/${encodeURIComponent(String(id))}.json`,
      { project: fields },
      "Update project",
    );
  }

  async deleteProject(params: ProjectIdParams): Promise<void> {
    await this.request(
      "DELETE",
      `/projects/${encodeURIComponent(String(params.id))}.json`,
      undefined,
      "Delete project",
    );
  }

  async archiveProject(params: ProjectIdParams): Promise<void> {
    await this.request(
      "PUT",
      `/projects/${encodeURIComponent(String(params.id))}/archive.json`,
      undefined,
      "Archive project",
    );
  }

  async unarchiveProject(params: ProjectIdParams): Promise<void> {
    await this.request(
      "PUT",
      `/projects/${encodeURIComponent(String(params.id))}/unarchive.json`,
      undefined,
      "Unarchive project",
    );
  }
}
