import { MembershipService } from "@/application/services/membershipService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateProjectMembershipParams } from "@/domain/membership/createProjectMembershipParams";
import { RedmineMembership } from "@/domain/membership/redmineMembership";

export class CreateProjectMembership extends BaseUseCase<
  CreateProjectMembershipParams,
  RedmineMembership
> {
  private membershipService: MembershipService;

  constructor(membershipService: MembershipService) {
    super();
    this.membershipService = membershipService;
  }

  override execute(
    params: CreateProjectMembershipParams,
  ): Promise<RedmineMembership> {
    return this.membershipService.createProjectMembership(params);
  }
}
