import { AgileSprintService } from "@/application/services/agileSprintService";
import { AssignIssueToSprintParams } from "@/domain/agile-sprint/assignIssueToSprintParams";
import { CreateAgileSprintParams } from "@/domain/agile-sprint/createAgileSprintParams";
import { GetAgileSprintParams } from "@/domain/agile-sprint/getAgileSprintParams";
import { GetIssueAgileDataParams } from "@/domain/agile-sprint/getIssueAgileDataParams";
import { ListAgileSprintsParams } from "@/domain/agile-sprint/listAgileSprintsParams";
import { ListAgileSprintsResult } from "@/domain/agile-sprint/listAgileSprintsResult";
import { ListIssuesBySprintParams } from "@/domain/agile-sprint/listIssuesBySprintParams";
import { RedmineAgileData } from "@/domain/agile-sprint/redmineAgileData";
import { RedmineAgileSprint } from "@/domain/agile-sprint/redmineAgileSprint";
import { UpdateAgileSprintParams } from "@/domain/agile-sprint/updateAgileSprintParams";
import { ListIssuesResult } from "@/domain/issue/listIssuesResult";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class AgileSprintController
  extends RedmineApiBaseController
  implements AgileSprintService
{
  async listAgileSprints(
    params: ListAgileSprintsParams,
  ): Promise<ListAgileSprintsResult> {
    return this.request<ListAgileSprintsResult>(
      "GET",
      `/projects/${encodeURIComponent(params.project_id)}/agile_sprints.json`,
      undefined,
      "List agile sprints",
    );
  }

  async getAgileSprint(
    params: GetAgileSprintParams,
  ): Promise<RedmineAgileSprint> {
    const raw = await this.request<{ agile_sprint: RedmineAgileSprint }>(
      "GET",
      `/projects/${encodeURIComponent(params.project_id)}/agile_sprints/${encodeURIComponent(params.sprint_id)}.json`,
      undefined,
      "Get agile sprint",
    );
    return raw.agile_sprint;
  }

  async createAgileSprint(
    params: CreateAgileSprintParams,
  ): Promise<RedmineAgileSprint> {
    const { project_id, ...sprintFields } = params;
    const raw = await this.request<{ agile_sprint: RedmineAgileSprint }>(
      "POST",
      `/projects/${encodeURIComponent(project_id)}/agile_sprints.json`,
      { agile_sprint: sprintFields },
      "Create agile sprint",
    );
    return raw.agile_sprint;
  }

  async updateAgileSprint(params: UpdateAgileSprintParams): Promise<void> {
    const { project_id, sprint_id, ...fields } = params;
    await this.request(
      "PUT",
      `/projects/${encodeURIComponent(project_id)}/agile_sprints/${encodeURIComponent(sprint_id)}.json`,
      { agile_sprint: fields },
      "Update agile sprint",
    );
  }

  async deleteAgileSprint(params: {
    project_id: string | number;
    sprint_id: number;
  }): Promise<void> {
    await this.request(
      "DELETE",
      `/projects/${encodeURIComponent(params.project_id)}/agile_sprints/${encodeURIComponent(params.sprint_id)}.json`,
      undefined,
      "Delete agile sprint",
    );
  }

  async getIssueAgileData(
    params: GetIssueAgileDataParams,
  ): Promise<RedmineAgileData> {
    const raw = await this.request<{ agile_data: RedmineAgileData }>(
      "GET",
      `/issues/${encodeURIComponent(params.issue_id)}/agile_data.json`,
      undefined,
      "Get issue agile data",
    );
    return raw.agile_data;
  }

  async assignIssueToSprint(params: AssignIssueToSprintParams): Promise<void> {
    const { issue_id, agile_sprint_id } = params;
    await this.request(
      "PUT",
      `/issues/${encodeURIComponent(issue_id)}.json`,
      {
        issue: {
          agile_data_attributes: {
            agile_sprint_id,
          },
        },
      },
      "Assign issue to sprint",
    );
  }

  async listIssuesBySprint(
    params: ListIssuesBySprintParams,
  ): Promise<ListIssuesResult> {
    const { sprint_id, project_id, status_id, limit, offset, sort, include } =
      params;

    // Redmine advanced filter syntax required for plugin fields like agile_sprint_id
    const parts: string[] = [];
    if (project_id !== undefined)
      parts.push(`project_id=${encodeURIComponent(String(project_id))}`);
    if (status_id !== undefined)
      parts.push(`status_id=${encodeURIComponent(status_id)}`);
    if (limit !== undefined) parts.push(`limit=${limit}`);
    if (offset !== undefined) parts.push(`offset=${offset}`);
    if (sort !== undefined) parts.push(`sort=${encodeURIComponent(sort)}`);
    if (include !== undefined)
      parts.push(`include=${encodeURIComponent(include)}`);

    parts.push(`f[]=agile_sprint_id`);
    parts.push(`op[agile_sprint_id]==`);
    parts.push(`v[agile_sprint_id][]=${encodeURIComponent(String(sprint_id))}`);

    const path = `/issues.json?${parts.join("&")}`;
    return this.request<ListIssuesResult>(
      "GET",
      path,
      undefined,
      "List issues by sprint",
    );
  }
}
