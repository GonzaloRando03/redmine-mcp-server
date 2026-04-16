import { GroupService } from "@/application/services/groupService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { AddUserToGroupParams } from "@/domain/group/addUserToGroupParams";

export class AddUserToGroup extends BaseUseCase<AddUserToGroupParams, void> {
  private groupService: GroupService;

  constructor(groupService: GroupService) {
    super();
    this.groupService = groupService;
  }

  override execute(params: AddUserToGroupParams): Promise<void> {
    return this.groupService.addUserToGroup(params);
  }
}
