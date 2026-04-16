import { MembershipService } from "@/application/services/membershipService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateMembershipParams } from "@/domain/membership/updateMembershipParams";

export class UpdateMembership extends BaseUseCase<
  UpdateMembershipParams,
  void
> {
  private membershipService: MembershipService;

  constructor(membershipService: MembershipService) {
    super();
    this.membershipService = membershipService;
  }

  override execute(params: UpdateMembershipParams): Promise<void> {
    return this.membershipService.updateMembership(params);
  }
}
