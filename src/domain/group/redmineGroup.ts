export interface RedmineGroup {
  id: number;
  name: string;
  users?: { id: number; name: string }[];
  memberships?: {
    id: number;
    project: { id: number; name: string };
    roles: { id: number; name: string }[];
  }[];
  custom_fields?: { id: number; name: string; value: string | string[] }[];
}
