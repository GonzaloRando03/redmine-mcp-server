import { AppContainer } from "@/infrastructure/mcp/container";
import { AddUserToGroupParams } from "@/domain/group/addUserToGroupParams";
import { CreateGroupParams } from "@/domain/group/createGroupParams";
import { GetGroupParams } from "@/domain/group/getGroupParams";
import { ListGroupsParams } from "@/domain/group/listGroupsParams";
import { RemoveUserFromGroupParams } from "@/domain/group/removeUserFromGroupParams";
import { UpdateGroupParams } from "@/domain/group/updateGroupParams";

export async function handleGroup(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listGroups"
    | "getGroup"
    | "createGroup"
    | "updateGroup"
    | "deleteGroup"
    | "addUserToGroup"
    | "removeUserFromGroup"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_groups":
      return c.listGroups.handle(args as unknown as ListGroupsParams);
    case "get_group":
      return c.getGroup.handle(args as unknown as GetGroupParams);
    case "create_group":
      return c.createGroup.handle(args as unknown as CreateGroupParams);
    case "update_group":
      return c.updateGroup.handle(args as unknown as UpdateGroupParams);
    case "delete_group":
      return c.deleteGroup.handle(args as unknown as { id: number });
    case "add_user_to_group":
      return c.addUserToGroup.handle(args as unknown as AddUserToGroupParams);
    case "remove_user_from_group":
      return c.removeUserFromGroup.handle(
        args as unknown as RemoveUserFromGroupParams,
      );
    default:
      return null;
  }
}
