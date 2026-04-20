export interface RedmineAgileSprint {
  id: number;
  name: string;
  start_date: string | null;
  end_date: string | null;
  status?: string;
  sharing?: string;
}
