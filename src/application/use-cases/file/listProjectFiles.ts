import { FileService } from "@/application/services/fileService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListProjectFilesParams } from "@/domain/file/listProjectFilesParams";
import { ListProjectFilesResult } from "@/domain/file/listProjectFilesResult";

export class ListProjectFiles extends BaseUseCase<
  ListProjectFilesParams,
  ListProjectFilesResult
> {
  private fileService: FileService;

  constructor(fileService: FileService) {
    super();
    this.fileService = fileService;
  }

  override execute(
    params: ListProjectFilesParams,
  ): Promise<ListProjectFilesResult> {
    return this.fileService.listProjectFiles(params);
  }
}
