import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListUsersParams } from "@/domain/user/listUsersParams";
import { ListUsersResult } from "@/domain/user/listUsersResult";

export class ListUsers extends BaseUseCase<
  ListUsersParams | undefined,
  ListUsersResult
> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(params?: ListUsersParams): Promise<ListUsersResult> {
    return this.userService.listUsers(params);
  }
}
