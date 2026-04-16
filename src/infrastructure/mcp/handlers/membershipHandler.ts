import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateProjectMembershipParams } from "@/domain/membership/createProjectMembershipParams";
import { GetMembershipParams } from "@/domain/membership/getMembershipParams";
import { ListProjectMembershipsParams } from "@/domain/membership/listProjectMembershipsParams";
import { UpdateMembershipParams } from "@/domain/membership/updateMembershipParams";

export async function handleMembership(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listProjectMemberships"
    | "getMembership"
    | "createProjectMembership"
    | "updateMembership"
    | "deleteMembership"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_project_memberships":
      return c.listProjectMemberships.handle(
        args as unknown as ListProjectMembershipsParams,
      );
    case "get_membership":
      return c.getMembership.handle(args as unknown as GetMembershipParams);
    case "create_project_membership":
      return c.createProjectMembership.handle(
        args as unknown as CreateProjectMembershipParams,
      );
    case "update_membership":
      return c.updateMembership.handle(
        args as unknown as UpdateMembershipParams,
      );
    case "delete_membership":
      return c.deleteMembership.handle(args as unknown as { id: number });
    default:
      return null;
  }
}
