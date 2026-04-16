import { VersionService } from "@/application/services/versionService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";

export class DeleteVersion extends BaseUseCase<{ id: number }, void> {
  private versionService: VersionService;

  constructor(versionService: VersionService) {
    super();
    this.versionService = versionService;
  }

  override execute(params: { id: number }): Promise<void> {
    return this.versionService.deleteVersion(params);
  }
}
