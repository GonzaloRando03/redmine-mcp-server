import { VersionService } from "@/application/services/versionService";
import { CreateVersionParams } from "@/domain/version/createVersionParams";
import { GetVersionParams } from "@/domain/version/getVersionParams";
import { ListProjectVersionsParams } from "@/domain/version/listProjectVersionsParams";
import { ListProjectVersionsResult } from "@/domain/version/listProjectVersionsResult";
import { RedmineVersion } from "@/domain/version/redmineVersion";
import { UpdateVersionParams } from "@/domain/version/updateVersionParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class VersionController
  extends RedmineApiBaseController
  implements VersionService
{
  async listProjectVersions(
    params: ListProjectVersionsParams,
  ): Promise<ListProjectVersionsResult> {
    const { project_id } = params;
    return this.request<ListProjectVersionsResult>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/versions.json`,
      undefined,
      "List project versions",
    );
  }

  async getVersion(params: GetVersionParams): Promise<RedmineVersion> {
    const raw = await this.request<{ version: RedmineVersion }>(
      "GET",
      `/versions/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Get version",
    );
    return raw.version;
  }

  async createVersion(params: CreateVersionParams): Promise<RedmineVersion> {
    const { project_id, ...versionFields } = params;
    const raw = await this.request<{ version: RedmineVersion }>(
      "POST",
      `/projects/${encodeURIComponent(project_id)}/versions.json`,
      { version: versionFields },
      "Create version",
    );
    return raw.version;
  }

  async updateVersion(params: UpdateVersionParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/versions/${encodeURIComponent(id)}.json`,
      { version: fields },
      "Update version",
    );
  }

  async deleteVersion(params: { id: number }): Promise<void> {
    await this.request(
      "DELETE",
      `/versions/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Delete version",
    );
  }
}
