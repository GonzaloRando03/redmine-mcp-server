import { GroupService } from "@/application/services/groupService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListGroupsParams } from "@/domain/group/listGroupsParams";
import { ListGroupsResult } from "@/domain/group/listGroupsResult";

export class ListGroups extends BaseUseCase<
  ListGroupsParams,
  ListGroupsResult
> {
  private groupService: GroupService;

  constructor(groupService: GroupService) {
    super();
    this.groupService = groupService;
  }

  override execute(params: ListGroupsParams): Promise<ListGroupsResult> {
    return this.groupService.listGroups(params);
  }
}
