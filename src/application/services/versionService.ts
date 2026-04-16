import { CreateVersionParams } from "@/domain/version/createVersionParams";
import { GetVersionParams } from "@/domain/version/getVersionParams";
import { ListProjectVersionsParams } from "@/domain/version/listProjectVersionsParams";
import { ListProjectVersionsResult } from "@/domain/version/listProjectVersionsResult";
import { RedmineVersion } from "@/domain/version/redmineVersion";
import { UpdateVersionParams } from "@/domain/version/updateVersionParams";

export interface VersionService {
  listProjectVersions(
    params: ListProjectVersionsParams,
  ): Promise<ListProjectVersionsResult>;
  getVersion(params: GetVersionParams): Promise<RedmineVersion>;
  createVersion(params: CreateVersionParams): Promise<RedmineVersion>;
  updateVersion(params: UpdateVersionParams): Promise<void>;
  deleteVersion(params: { id: number }): Promise<void>;
}
