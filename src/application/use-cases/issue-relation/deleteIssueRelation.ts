import { IssueRelationService } from "@/application/services/issueRelationService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteIssueRelation extends BaseUseCase<{ id: number }, void> {
  private issueRelationService: IssueRelationService;

  constructor(issueRelationService: IssueRelationService) {
    super();
    this.issueRelationService = issueRelationService;
  }

  override execute(params: { id: number }): Promise<void> {
    return this.issueRelationService.deleteIssueRelation(params);
  }
}
