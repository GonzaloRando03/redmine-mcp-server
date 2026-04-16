import { FileService } from "@/application/services/fileService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateProjectFileParams } from "@/domain/file/createProjectFileParams";

export class CreateProjectFile extends BaseUseCase<
  CreateProjectFileParams,
  void
> {
  private fileService: FileService;

  constructor(fileService: FileService) {
    super();
    this.fileService = fileService;
  }

  override execute(params: CreateProjectFileParams): Promise<void> {
    return this.fileService.createProjectFile(params);
  }
}
