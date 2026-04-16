import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateMyAccountParams } from "@/domain/user/updateMyAccountParams";

export class UpdateMyAccount extends BaseUseCase<UpdateMyAccountParams, void> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(params: UpdateMyAccountParams): Promise<void> {
    return this.userService.updateMyAccount(params);
  }
}
