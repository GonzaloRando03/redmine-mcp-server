import { UserService } from "@/application/services/userService";
import { CreateUserParams } from "@/domain/user/createUserParams";
import { GetCurrentUserParams } from "@/domain/user/getCurrentUserParams";
import { GetUserParams } from "@/domain/user/getUserParams";
import { ListUsersParams } from "@/domain/user/listUsersParams";
import { ListUsersResult } from "@/domain/user/listUsersResult";
import { RedmineUser } from "@/domain/user/redmineUser";
import { UpdateMyAccountParams } from "@/domain/user/updateMyAccountParams";
import { UpdateUserParams } from "@/domain/user/updateUserParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class UserController
  extends RedmineApiBaseController
  implements UserService
{
  async listUsers(params?: ListUsersParams): Promise<ListUsersResult> {
    return this.request<ListUsersResult>(
      "GET",
      "/users.json",
      params as Record<string, unknown>,
      "List users",
    );
  }

  async getUser(params: GetUserParams): Promise<RedmineUser> {
    const { id, ...query } = params;
    const raw = await this.request<{ user: RedmineUser }>(
      "GET",
      `/users/${encodeURIComponent(id)}.json`,
      query as Record<string, unknown>,
      "Get user",
    );
    return raw.user;
  }

  async getCurrentUser(params?: GetCurrentUserParams): Promise<RedmineUser> {
    const raw = await this.request<{ user: RedmineUser }>(
      "GET",
      "/users/current.json",
      params as Record<string, unknown>,
      "Get current user",
    );
    return raw.user;
  }

  async createUser(params: CreateUserParams): Promise<RedmineUser> {
    const { send_information, ...userFields } = params;
    const raw = await this.request<{ user: RedmineUser }>(
      "POST",
      "/users.json",
      { user: userFields, send_information },
      "Create user",
    );
    return raw.user;
  }

  async updateUser(params: UpdateUserParams): Promise<void> {
    const { id, send_information, ...userFields } = params;
    await this.request(
      "PUT",
      `/users/${encodeURIComponent(id)}.json`,
      { user: userFields, send_information },
      "Update user",
    );
  }

  async deleteUser(params: { id: number }): Promise<void> {
    await this.request(
      "DELETE",
      `/users/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Delete user",
    );
  }

  async getMyAccount(): Promise<RedmineUser> {
    const raw = await this.request<{ user: RedmineUser }>(
      "GET",
      "/my/account.json",
      undefined,
      "Get my account",
    );
    return raw.user;
  }

  async updateMyAccount(params: UpdateMyAccountParams): Promise<void> {
    await this.request(
      "PUT",
      "/my/account.json",
      { user: params },
      "Update my account",
    );
  }
}
