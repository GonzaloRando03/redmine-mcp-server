export interface RedmineTracker {
  id: number;
  name: string;
  default_status?: { id: number; name: string };
  description?: string | null;
  enabled_standard_fields?: string[];
}
