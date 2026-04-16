export interface GetWikiPageVersionParams {
  project_id: string | number;
  title: string;
  version: number;
  include?: "attachments"[];
}
