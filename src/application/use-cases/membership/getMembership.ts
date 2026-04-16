import { MembershipService } from "@/application/services/membershipService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetMembershipParams } from "@/domain/membership/getMembershipParams";
import { RedmineMembership } from "@/domain/membership/redmineMembership";

export class GetMembership extends BaseUseCase<
  GetMembershipParams,
  RedmineMembership
> {
  private membershipService: MembershipService;

  constructor(membershipService: MembershipService) {
    super();
    this.membershipService = membershipService;
  }

  override execute(params: GetMembershipParams): Promise<RedmineMembership> {
    return this.membershipService.getMembership(params);
  }
}
