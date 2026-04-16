import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateUserParams } from "@/domain/user/createUserParams";
import { GetCurrentUserParams } from "@/domain/user/getCurrentUserParams";
import { GetUserParams } from "@/domain/user/getUserParams";
import { ListUsersParams } from "@/domain/user/listUsersParams";
import { UpdateMyAccountParams } from "@/domain/user/updateMyAccountParams";
import { UpdateUserParams } from "@/domain/user/updateUserParams";

export async function handleUser(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listUsers"
    | "getUser"
    | "getCurrentUser"
    | "createUser"
    | "updateUser"
    | "deleteUser"
    | "getMyAccount"
    | "updateMyAccount"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_users":
      return c.listUsers.handle(
        Object.keys(args).length
          ? (args as unknown as ListUsersParams)
          : undefined,
      );
    case "get_user":
      return c.getUser.handle(args as unknown as GetUserParams);
    case "get_current_user":
      return c.getCurrentUser.handle(
        Object.keys(args).length
          ? (args as unknown as GetCurrentUserParams)
          : undefined,
      );
    case "create_user":
      return c.createUser.handle(args as unknown as CreateUserParams);
    case "update_user":
      return c.updateUser.handle(args as unknown as UpdateUserParams);
    case "delete_user":
      return c.deleteUser.handle(args as unknown as { id: number });
    case "get_my_account":
      return c.getMyAccount.handle(undefined as unknown as void);
    case "update_my_account":
      return c.updateMyAccount.handle(args as unknown as UpdateMyAccountParams);
    default:
      return null;
  }
}
