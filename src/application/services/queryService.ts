import { ListQueriesParams } from "../../domain/query/listQueriesParams";
import { ListQueriesResult } from "../../domain/query/listQueriesResult";

export interface QueryService {
  listQueries(params: ListQueriesParams): Promise<ListQueriesResult>;
}
