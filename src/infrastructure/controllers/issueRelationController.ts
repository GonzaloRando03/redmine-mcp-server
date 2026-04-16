import { IssueRelationService } from "@/application/services/issueRelationService";
import { CreateIssueRelationParams } from "@/domain/issue-relation/createIssueRelationParams";
import { GetIssueRelationParams } from "@/domain/issue-relation/getIssueRelationParams";
import { ListIssueRelationsParams } from "@/domain/issue-relation/listIssueRelationsParams";
import { ListIssueRelationsResult } from "@/domain/issue-relation/listIssueRelationsResult";
import { RedmineIssueRelation } from "@/domain/issue-relation/redmineIssueRelation";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class IssueRelationController
  extends RedmineApiBaseController
  implements IssueRelationService
{
  async listIssueRelations(
    params: ListIssueRelationsParams,
  ): Promise<ListIssueRelationsResult> {
    const { issue_id } = params;
    return this.request<ListIssueRelationsResult>(
      "GET",
      `/issues/${encodeURIComponent(issue_id)}/relations.json`,
      undefined,
      "List issue relations",
    );
  }

  async getIssueRelation(
    params: GetIssueRelationParams,
  ): Promise<RedmineIssueRelation> {
    const raw = await this.request<{ relation: RedmineIssueRelation }>(
      "GET",
      `/relations/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Get issue relation",
    );
    return raw.relation;
  }

  async createIssueRelation(
    params: CreateIssueRelationParams,
  ): Promise<RedmineIssueRelation> {
    const { issue_id, ...relationFields } = params;
    const raw = await this.request<{ relation: RedmineIssueRelation }>(
      "POST",
      `/issues/${encodeURIComponent(issue_id)}/relations.json`,
      { relation: relationFields },
      "Create issue relation",
    );
    return raw.relation;
  }

  async deleteIssueRelation(params: { id: number }): Promise<void> {
    await this.request(
      "DELETE",
      `/relations/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Delete issue relation",
    );
  }
}
