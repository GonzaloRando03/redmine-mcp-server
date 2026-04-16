import { GroupService } from "@/application/services/groupService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateGroupParams } from "@/domain/group/createGroupParams";
import { RedmineGroup } from "@/domain/group/redmineGroup";

export class CreateGroup extends BaseUseCase<CreateGroupParams, RedmineGroup> {
  private groupService: GroupService;

  constructor(groupService: GroupService) {
    super();
    this.groupService = groupService;
  }

  override execute(params: CreateGroupParams): Promise<RedmineGroup> {
    return this.groupService.createGroup(params);
  }
}
