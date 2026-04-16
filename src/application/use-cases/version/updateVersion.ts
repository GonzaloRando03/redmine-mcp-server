import { VersionService } from "@/application/services/versionService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateVersionParams } from "@/domain/version/updateVersionParams";

export class UpdateVersion extends BaseUseCase<UpdateVersionParams, void> {
  private versionService: VersionService;

  constructor(versionService: VersionService) {
    super();
    this.versionService = versionService;
  }

  override execute(params: UpdateVersionParams): Promise<void> {
    return this.versionService.updateVersion(params);
  }
}
