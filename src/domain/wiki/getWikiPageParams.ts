export interface GetWikiPageParams {
  project_id: string | number;
  title: string;
  include?: "attachments"[];
}
