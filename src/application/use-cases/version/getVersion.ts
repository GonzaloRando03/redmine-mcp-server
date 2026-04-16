import { VersionService } from "@/application/services/versionService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetVersionParams } from "@/domain/version/getVersionParams";
import { RedmineVersion } from "@/domain/version/redmineVersion";

export class GetVersion extends BaseUseCase<GetVersionParams, RedmineVersion> {
  private versionService: VersionService;

  constructor(versionService: VersionService) {
    super();
    this.versionService = versionService;
  }

  override execute(params: GetVersionParams): Promise<RedmineVersion> {
    return this.versionService.getVersion(params);
  }
}
