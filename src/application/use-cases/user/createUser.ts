import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateUserParams } from "@/domain/user/createUserParams";
import { RedmineUser } from "@/domain/user/redmineUser";

export class CreateUser extends BaseUseCase<CreateUserParams, RedmineUser> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(params: CreateUserParams): Promise<RedmineUser> {
    return this.userService.createUser(params);
  }
}
