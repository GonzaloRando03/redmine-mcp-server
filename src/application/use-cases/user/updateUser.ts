import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateUserParams } from "@/domain/user/updateUserParams";

export class UpdateUser extends BaseUseCase<UpdateUserParams, void> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(params: UpdateUserParams): Promise<void> {
    return this.userService.updateUser(params);
  }
}
