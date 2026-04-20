import { AgileSprintService } from "@/application/services/agileSprintService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { ListAgileSprintsParams } from "@/domain/agile-sprint/listAgileSprintsParams";
import { ListAgileSprintsResult } from "@/domain/agile-sprint/listAgileSprintsResult";

export class ListAgileSprints extends BaseUseCase<
  ListAgileSprintsParams,
  ListAgileSprintsResult
> {
  private agileSprintService: AgileSprintService;

  constructor(agileSprintService: AgileSprintService) {
    super();
    this.agileSprintService = agileSprintService;
  }

  override execute(
    params: ListAgileSprintsParams,
  ): Promise<ListAgileSprintsResult> {
    return this.agileSprintService.listAgileSprints(params);
  }
}
