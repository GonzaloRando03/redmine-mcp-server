export interface UpdateVersionParams {
  id: number;
  name?: string;
  status?: "open" | "locked" | "closed";
  sharing?: "none" | "descendants" | "hierarchy" | "tree" | "system";
  due_date?: string;
  description?: string;
  wiki_page_title?: string;
}
