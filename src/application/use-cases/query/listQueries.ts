import { BaseUseCase } from "../baseUseCase";
import { QueryService } from "../../services/queryService";
import { ListQueriesParams } from "../../../domain/query/listQueriesParams";
import { ListQueriesResult } from "../../../domain/query/listQueriesResult";

export class ListQueries extends BaseUseCase<
  ListQueriesParams,
  ListQueriesResult
> {
  constructor(private queryService: QueryService) {
    super();
  }
  async execute(params: ListQueriesParams): Promise<ListQueriesResult> {
    return this.queryService.listQueries(params);
  }
}
