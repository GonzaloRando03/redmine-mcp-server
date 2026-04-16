import { AddUserToGroupParams } from "@/domain/group/addUserToGroupParams";
import { CreateGroupParams } from "@/domain/group/createGroupParams";
import { GetGroupParams } from "@/domain/group/getGroupParams";
import { ListGroupsParams } from "@/domain/group/listGroupsParams";
import { ListGroupsResult } from "@/domain/group/listGroupsResult";
import { RedmineGroup } from "@/domain/group/redmineGroup";
import { RemoveUserFromGroupParams } from "@/domain/group/removeUserFromGroupParams";
import { UpdateGroupParams } from "@/domain/group/updateGroupParams";

export interface GroupService {
  listGroups(params: ListGroupsParams): Promise<ListGroupsResult>;
  getGroup(params: GetGroupParams): Promise<RedmineGroup>;
  createGroup(params: CreateGroupParams): Promise<RedmineGroup>;
  updateGroup(params: UpdateGroupParams): Promise<void>;
  deleteGroup(params: { id: number }): Promise<void>;
  addUserToGroup(params: AddUserToGroupParams): Promise<void>;
  removeUserFromGroup(params: RemoveUserFromGroupParams): Promise<void>;
}
