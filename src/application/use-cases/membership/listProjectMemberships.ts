import { MembershipService } from "@/application/services/membershipService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListProjectMembershipsParams } from "@/domain/membership/listProjectMembershipsParams";
import { ListProjectMembershipsResult } from "@/domain/membership/listProjectMembershipsResult";

export class ListProjectMemberships extends BaseUseCase<
  ListProjectMembershipsParams,
  ListProjectMembershipsResult
> {
  private membershipService: MembershipService;

  constructor(membershipService: MembershipService) {
    super();
    this.membershipService = membershipService;
  }

  override execute(
    params: ListProjectMembershipsParams,
  ): Promise<ListProjectMembershipsResult> {
    return this.membershipService.listProjectMemberships(params);
  }
}
