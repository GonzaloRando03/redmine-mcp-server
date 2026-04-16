import { VersionService } from "@/application/services/versionService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { CreateVersionParams } from "@/domain/version/createVersionParams";
import { RedmineVersion } from "@/domain/version/redmineVersion";

export class CreateVersion extends BaseUseCase<
  CreateVersionParams,
  RedmineVersion
> {
  private versionService: VersionService;

  constructor(versionService: VersionService) {
    super();
    this.versionService = versionService;
  }

  override execute(params: CreateVersionParams): Promise<RedmineVersion> {
    return this.versionService.createVersion(params);
  }
}
