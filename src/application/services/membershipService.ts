import { CreateProjectMembershipParams } from "@/domain/membership/createProjectMembershipParams";
import { GetMembershipParams } from "@/domain/membership/getMembershipParams";
import { ListProjectMembershipsParams } from "@/domain/membership/listProjectMembershipsParams";
import { ListProjectMembershipsResult } from "@/domain/membership/listProjectMembershipsResult";
import { RedmineMembership } from "@/domain/membership/redmineMembership";
import { UpdateMembershipParams } from "@/domain/membership/updateMembershipParams";

export interface MembershipService {
  listProjectMemberships(
    params: ListProjectMembershipsParams,
  ): Promise<ListProjectMembershipsResult>;
  getMembership(params: GetMembershipParams): Promise<RedmineMembership>;
  createProjectMembership(
    params: CreateProjectMembershipParams,
  ): Promise<RedmineMembership>;
  updateMembership(params: UpdateMembershipParams): Promise<void>;
  deleteMembership(params: { id: number }): Promise<void>;
}
