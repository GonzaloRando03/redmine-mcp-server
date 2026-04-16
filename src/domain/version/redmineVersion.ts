export interface RedmineVersion {
  id: number;
  project: { id: number; name: string };
  name: string;
  description: string | null;
  status: "open" | "locked" | "closed";
  due_date: string | null;
  sharing: "none" | "descendants" | "hierarchy" | "tree" | "system";
  wiki_page_title?: string | null;
  estimated_hours?: number | null;
  spent_hours?: number | null;
  custom_fields?: { id: number; name: string; value: string | string[] }[];
  created_on: string;
  updated_on: string;
}
