import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetUserParams } from "@/domain/user/getUserParams";
import { RedmineUser } from "@/domain/user/redmineUser";

export class GetUser extends BaseUseCase<GetUserParams, RedmineUser> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(params: GetUserParams): Promise<RedmineUser> {
    return this.userService.getUser(params);
  }
}
