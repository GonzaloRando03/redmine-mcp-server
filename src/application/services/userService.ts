import { CreateUserParams } from "@/domain/user/createUserParams";
import { GetCurrentUserParams } from "@/domain/user/getCurrentUserParams";
import { GetUserParams } from "@/domain/user/getUserParams";
import { ListUsersParams } from "@/domain/user/listUsersParams";
import { ListUsersResult } from "@/domain/user/listUsersResult";
import { RedmineUser } from "@/domain/user/redmineUser";
import { UpdateMyAccountParams } from "@/domain/user/updateMyAccountParams";
import { UpdateUserParams } from "@/domain/user/updateUserParams";

export interface UserService {
  listUsers(params?: ListUsersParams): Promise<ListUsersResult>;
  getUser(params: GetUserParams): Promise<RedmineUser>;
  getCurrentUser(params?: GetCurrentUserParams): Promise<RedmineUser>;
  createUser(params: CreateUserParams): Promise<RedmineUser>;
  updateUser(params: UpdateUserParams): Promise<void>;
  deleteUser(params: { id: number }): Promise<void>;
  getMyAccount(): Promise<RedmineUser>;
  updateMyAccount(params: UpdateMyAccountParams): Promise<void>;
}
