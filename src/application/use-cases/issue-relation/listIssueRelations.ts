import { IssueRelationService } from "@/application/services/issueRelationService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListIssueRelationsParams } from "@/domain/issue-relation/listIssueRelationsParams";
import { ListIssueRelationsResult } from "@/domain/issue-relation/listIssueRelationsResult";

export class ListIssueRelations extends BaseUseCase<
  ListIssueRelationsParams,
  ListIssueRelationsResult
> {
  private issueRelationService: IssueRelationService;

  constructor(issueRelationService: IssueRelationService) {
    super();
    this.issueRelationService = issueRelationService;
  }

  override execute(
    params: ListIssueRelationsParams,
  ): Promise<ListIssueRelationsResult> {
    return this.issueRelationService.listIssueRelations(params);
  }
}
