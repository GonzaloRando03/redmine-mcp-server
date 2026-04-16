import { GroupService } from "@/application/services/groupService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteGroup extends BaseUseCase<{ id: number }, void> {
  private groupService: GroupService;

  constructor(groupService: GroupService) {
    super();
    this.groupService = groupService;
  }

  override execute(params: { id: number }): Promise<void> {
    return this.groupService.deleteGroup(params);
  }
}
