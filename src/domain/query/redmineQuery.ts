export interface RedmineQuery {
  id: number;
  name: string;
  is_public: boolean;
  project_id?: number | null;
}
