import { AssignIssueToSprintParams } from "@/domain/agile-sprint/assignIssueToSprintParams";
import { CreateAgileSprintParams } from "@/domain/agile-sprint/createAgileSprintParams";
import { GetAgileSprintParams } from "@/domain/agile-sprint/getAgileSprintParams";
import { GetIssueAgileDataParams } from "@/domain/agile-sprint/getIssueAgileDataParams";
import { ListAgileSprintsParams } from "@/domain/agile-sprint/listAgileSprintsParams";
import { ListAgileSprintsResult } from "@/domain/agile-sprint/listAgileSprintsResult";
import { RedmineAgileData } from "@/domain/agile-sprint/redmineAgileData";
import { RedmineAgileSprint } from "@/domain/agile-sprint/redmineAgileSprint";
import { UpdateAgileSprintParams } from "@/domain/agile-sprint/updateAgileSprintParams";

export interface AgileSprintService {
  listAgileSprints(
    params: ListAgileSprintsParams,
  ): Promise<ListAgileSprintsResult>;
  getAgileSprint(params: GetAgileSprintParams): Promise<RedmineAgileSprint>;
  createAgileSprint(
    params: CreateAgileSprintParams,
  ): Promise<RedmineAgileSprint>;
  updateAgileSprint(params: UpdateAgileSprintParams): Promise<void>;
  deleteAgileSprint(params: {
    project_id: string | number;
    sprint_id: number;
  }): Promise<void>;
  getIssueAgileData(params: GetIssueAgileDataParams): Promise<RedmineAgileData>;
  assignIssueToSprint(params: AssignIssueToSprintParams): Promise<void>;
}
