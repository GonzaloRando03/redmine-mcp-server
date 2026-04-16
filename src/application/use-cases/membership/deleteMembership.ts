import { MembershipService } from "@/application/services/membershipService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteMembership extends BaseUseCase<{ id: number }, void> {
  private membershipService: MembershipService;

  constructor(membershipService: MembershipService) {
    super();
    this.membershipService = membershipService;
  }

  override execute(params: { id: number }): Promise<void> {
    return this.membershipService.deleteMembership(params);
  }
}
