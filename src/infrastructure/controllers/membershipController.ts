import { MembershipService } from "@/application/services/membershipService";
import { CreateProjectMembershipParams } from "@/domain/membership/createProjectMembershipParams";
import { GetMembershipParams } from "@/domain/membership/getMembershipParams";
import { ListProjectMembershipsParams } from "@/domain/membership/listProjectMembershipsParams";
import { ListProjectMembershipsResult } from "@/domain/membership/listProjectMembershipsResult";
import { RedmineMembership } from "@/domain/membership/redmineMembership";
import { UpdateMembershipParams } from "@/domain/membership/updateMembershipParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class MembershipController
  extends RedmineApiBaseController
  implements MembershipService
{
  async listProjectMemberships(
    params: ListProjectMembershipsParams,
  ): Promise<ListProjectMembershipsResult> {
    const { project_id, ...query } = params;
    return this.request<ListProjectMembershipsResult>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/memberships.json`,
      query as Record<string, unknown>,
      "List project memberships",
    );
  }

  async getMembership(params: GetMembershipParams): Promise<RedmineMembership> {
    const raw = await this.request<{ membership: RedmineMembership }>(
      "GET",
      `/memberships/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Get membership",
    );
    return raw.membership;
  }

  async createProjectMembership(
    params: CreateProjectMembershipParams,
  ): Promise<RedmineMembership> {
    const { project_id, ...membershipFields } = params;
    const raw = await this.request<{ membership: RedmineMembership }>(
      "POST",
      `/projects/${encodeURIComponent(project_id)}/memberships.json`,
      { membership: membershipFields },
      "Create project membership",
    );
    return raw.membership;
  }

  async updateMembership(params: UpdateMembershipParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/memberships/${encodeURIComponent(id)}.json`,
      { membership: fields },
      "Update membership",
    );
  }

  async deleteMembership(params: { id: number }): Promise<void> {
    await this.request(
      "DELETE",
      `/memberships/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Delete membership",
    );
  }
}
