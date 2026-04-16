import { VersionService } from "@/application/services/versionService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListProjectVersionsParams } from "@/domain/version/listProjectVersionsParams";
import { ListProjectVersionsResult } from "@/domain/version/listProjectVersionsResult";

export class ListProjectVersions extends BaseUseCase<
  ListProjectVersionsParams,
  ListProjectVersionsResult
> {
  private versionService: VersionService;

  constructor(versionService: VersionService) {
    super();
    this.versionService = versionService;
  }

  override execute(
    params: ListProjectVersionsParams,
  ): Promise<ListProjectVersionsResult> {
    return this.versionService.listProjectVersions(params);
  }
}
