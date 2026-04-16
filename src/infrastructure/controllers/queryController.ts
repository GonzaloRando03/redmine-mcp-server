import { RedmineApiBaseController } from "./redmineApiBaseController";
import { QueryService } from "../../application/services/queryService";
import { ListQueriesParams } from "../../domain/query/listQueriesParams";
import { ListQueriesResult } from "../../domain/query/listQueriesResult";

export class QueryController
  extends RedmineApiBaseController
  implements QueryService
{
  async listQueries(params: ListQueriesParams): Promise<ListQueriesResult> {
    return this.request<ListQueriesResult>("GET", "/queries.json");
  }
}
