import { IssueRelationService } from "@/application/services/issueRelationService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetIssueRelationParams } from "@/domain/issue-relation/getIssueRelationParams";
import { RedmineIssueRelation } from "@/domain/issue-relation/redmineIssueRelation";

export class GetIssueRelation extends BaseUseCase<
  GetIssueRelationParams,
  RedmineIssueRelation
> {
  private issueRelationService: IssueRelationService;

  constructor(issueRelationService: IssueRelationService) {
    super();
    this.issueRelationService = issueRelationService;
  }

  override execute(
    params: GetIssueRelationParams,
  ): Promise<RedmineIssueRelation> {
    return this.issueRelationService.getIssueRelation(params);
  }
}
