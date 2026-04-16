import { FileService } from "@/application/services/fileService";
import { CreateProjectFileParams } from "@/domain/file/createProjectFileParams";
import { ListProjectFilesParams } from "@/domain/file/listProjectFilesParams";
import { ListProjectFilesResult } from "@/domain/file/listProjectFilesResult";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class FileController
  extends RedmineApiBaseController
  implements FileService
{
  async listProjectFiles(
    params: ListProjectFilesParams,
  ): Promise<ListProjectFilesResult> {
    const { project_id } = params;
    return this.request<ListProjectFilesResult>(
      "GET",
      `/projects/${encodeURIComponent(project_id)}/files.json`,
      undefined,
      "List project files",
    );
  }

  async createProjectFile(params: CreateProjectFileParams): Promise<void> {
    const { project_id, token, filename, ...optionalFields } = params;
    const fileData: Record<string, unknown> = { token, filename };
    if (optionalFields.description !== undefined) {
      fileData.description = optionalFields.description;
    }
    if (optionalFields.version_id !== undefined) {
      fileData.version_id = optionalFields.version_id;
    }
    await this.request(
      "POST",
      `/projects/${encodeURIComponent(project_id)}/files.json`,
      { file: fileData },
      "Create project file",
    );
  }
}
