import { UserService } from "@/application/services/userService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteUser extends BaseUseCase<{ id: number }, void> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  override execute(params: { id: number }): Promise<void> {
    return this.userService.deleteUser(params);
  }
}
