export interface SearchParams {
  q: string;
  scope?: "all" | "my_projects" | "subprojects";
  all_words?: boolean;
  titles_only?: boolean;
  issues?: boolean;
  news?: boolean;
  documents?: boolean;
  changesets?: boolean;
  wiki_pages?: boolean;
  messages?: boolean;
  projects?: boolean;
  offset?: number;
  limit?: number;
}
