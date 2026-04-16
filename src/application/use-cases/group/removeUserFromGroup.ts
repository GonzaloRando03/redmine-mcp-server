import { GroupService } from "@/application/services/groupService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { RemoveUserFromGroupParams } from "@/domain/group/removeUserFromGroupParams";

export class RemoveUserFromGroup extends BaseUseCase<
  RemoveUserFromGroupParams,
  void
> {
  private groupService: GroupService;

  constructor(groupService: GroupService) {
    super();
    this.groupService = groupService;
  }

  override execute(params: RemoveUserFromGroupParams): Promise<void> {
    return this.groupService.removeUserFromGroup(params);
  }
}
