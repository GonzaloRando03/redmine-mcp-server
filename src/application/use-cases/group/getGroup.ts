import { GroupService } from "@/application/services/groupService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetGroupParams } from "@/domain/group/getGroupParams";
import { RedmineGroup } from "@/domain/group/redmineGroup";

export class GetGroup extends BaseUseCase<GetGroupParams, RedmineGroup> {
  private groupService: GroupService;

  constructor(groupService: GroupService) {
    super();
    this.groupService = groupService;
  }

  override execute(params: GetGroupParams): Promise<RedmineGroup> {
    return this.groupService.getGroup(params);
  }
}
