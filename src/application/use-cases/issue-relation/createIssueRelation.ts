import { IssueRelationService } from "@/application/services/issueRelationService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateIssueRelationParams } from "@/domain/issue-relation/createIssueRelationParams";
import { RedmineIssueRelation } from "@/domain/issue-relation/redmineIssueRelation";

export class CreateIssueRelation extends BaseUseCase<
  CreateIssueRelationParams,
  RedmineIssueRelation
> {
  private issueRelationService: IssueRelationService;

  constructor(issueRelationService: IssueRelationService) {
    super();
    this.issueRelationService = issueRelationService;
  }

  override execute(
    params: CreateIssueRelationParams,
  ): Promise<RedmineIssueRelation> {
    return this.issueRelationService.createIssueRelation(params);
  }
}
