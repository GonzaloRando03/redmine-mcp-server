export interface CreateOrUpdateWikiPageParams {
  project_id: string | number;
  title: string;
  text: string;
  comments?: string;
  parent_title?: string;
  version?: number;
}
