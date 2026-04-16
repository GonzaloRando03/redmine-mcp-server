import { CreateProjectFileParams } from "@/domain/file/createProjectFileParams";
import { ListProjectFilesParams } from "@/domain/file/listProjectFilesParams";
import { ListProjectFilesResult } from "@/domain/file/listProjectFilesResult";

export interface FileService {
  listProjectFiles(
    params: ListProjectFilesParams,
  ): Promise<ListProjectFilesResult>;
  createProjectFile(params: CreateProjectFileParams): Promise<void>;
}
