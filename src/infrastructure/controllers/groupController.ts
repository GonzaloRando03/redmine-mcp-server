import { GroupService } from "@/application/services/groupService";
import { AddUserToGroupParams } from "@/domain/group/addUserToGroupParams";
import { CreateGroupParams } from "@/domain/group/createGroupParams";
import { GetGroupParams } from "@/domain/group/getGroupParams";
import { ListGroupsParams } from "@/domain/group/listGroupsParams";
import { ListGroupsResult } from "@/domain/group/listGroupsResult";
import { RedmineGroup } from "@/domain/group/redmineGroup";
import { RemoveUserFromGroupParams } from "@/domain/group/removeUserFromGroupParams";
import { UpdateGroupParams } from "@/domain/group/updateGroupParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class GroupController
  extends RedmineApiBaseController
  implements GroupService
{
  async listGroups(params: ListGroupsParams): Promise<ListGroupsResult> {
    return this.request<ListGroupsResult>(
      "GET",
      "/groups.json",
      params as Record<string, unknown>,
      "List groups",
    );
  }

  async getGroup(params: GetGroupParams): Promise<RedmineGroup> {
    const { id, include, ...rest } = params;
    const query: Record<string, unknown> = { ...rest };
    if (include && include.length > 0) {
      query.include = include.join(",");
    }
    const raw = await this.request<{ group: RedmineGroup }>(
      "GET",
      `/groups/${encodeURIComponent(id)}.json`,
      query,
      "Get group",
    );
    return raw.group;
  }

  async createGroup(params: CreateGroupParams): Promise<RedmineGroup> {
    const raw = await this.request<{ group: RedmineGroup }>(
      "POST",
      "/groups.json",
      { group: params },
      "Create group",
    );
    return raw.group;
  }

  async updateGroup(params: UpdateGroupParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/groups/${encodeURIComponent(id)}.json`,
      { group: fields },
      "Update group",
    );
  }

  async deleteGroup(params: { id: number }): Promise<void> {
    await this.request(
      "DELETE",
      `/groups/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Delete group",
    );
  }

  async addUserToGroup(params: AddUserToGroupParams): Promise<void> {
    await this.request(
      "POST",
      `/groups/${encodeURIComponent(params.group_id)}/users.json`,
      { user_id: params.user_id },
      "Add user to group",
    );
  }

  async removeUserFromGroup(params: RemoveUserFromGroupParams): Promise<void> {
    await this.request(
      "DELETE",
      `/groups/${encodeURIComponent(params.group_id)}/users/${encodeURIComponent(params.user_id)}.json`,
      undefined,
      "Remove user from group",
    );
  }
}
