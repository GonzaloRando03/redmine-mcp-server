import { BaseUseCase } from "../baseUseCase";
import { EnumerationService } from "../../services/enumerationService";
import { ListIssuePrioritiesParams } from "../../../domain/enumeration/listIssuePrioritiesParams";
import { ListIssuePrioritiesResult } from "../../../domain/enumeration/listIssuePrioritiesResult";

export class ListIssuePriorities extends BaseUseCase<
  ListIssuePrioritiesParams,
  ListIssuePrioritiesResult
> {
  constructor(private enumerationService: EnumerationService) {
    super();
  }
  async execute(
    params: ListIssuePrioritiesParams,
  ): Promise<ListIssuePrioritiesResult> {
    return this.enumerationService.listIssuePriorities(params);
  }
}
