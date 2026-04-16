import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { RedmineUser } from "@/domain/user/redmineUser";

export class GetMyAccount extends BaseUseCase<void, RedmineUser> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(): Promise<RedmineUser> {
    return this.userService.getMyAccount();
  }
}
