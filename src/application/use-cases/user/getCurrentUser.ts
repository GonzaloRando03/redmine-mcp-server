import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetCurrentUserParams } from "@/domain/user/getCurrentUserParams";
import { RedmineUser } from "@/domain/user/redmineUser";

export class GetCurrentUser extends BaseUseCase<
  GetCurrentUserParams | undefined,
  RedmineUser
> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(params?: GetCurrentUserParams): Promise<RedmineUser> {
    return this.userService.getCurrentUser(params);
  }
}
