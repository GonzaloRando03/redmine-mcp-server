import { CreateIssueRelationParams } from "@/domain/issue-relation/createIssueRelationParams";
import { GetIssueRelationParams } from "@/domain/issue-relation/getIssueRelationParams";
import { ListIssueRelationsParams } from "@/domain/issue-relation/listIssueRelationsParams";
import { ListIssueRelationsResult } from "@/domain/issue-relation/listIssueRelationsResult";
import { RedmineIssueRelation } from "@/domain/issue-relation/redmineIssueRelation";

export interface IssueRelationService {
  listIssueRelations(
    params: ListIssueRelationsParams,
  ): Promise<ListIssueRelationsResult>;
  getIssueRelation(
    params: GetIssueRelationParams,
  ): Promise<RedmineIssueRelation>;
  createIssueRelation(
    params: CreateIssueRelationParams,
  ): Promise<RedmineIssueRelation>;
  deleteIssueRelation(params: { id: number }): Promise<void>;
}
