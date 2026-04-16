import { GroupService } from "@/application/services/groupService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateGroupParams } from "@/domain/group/updateGroupParams";

export class UpdateGroup extends BaseUseCase<UpdateGroupParams, void> {
  private groupService: GroupService;

  constructor(groupService: GroupService) {
    super();
    this.groupService = groupService;
  }

  override execute(params: UpdateGroupParams): Promise<void> {
    return this.groupService.updateGroup(params);
  }
}
