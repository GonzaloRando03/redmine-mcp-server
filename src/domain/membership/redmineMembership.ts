export interface RedmineMembership {
  id: number;
  project: { id: number; name: string };
  user?: { id: number; name: string };
  group?: { id: number; name: string };
  roles: { id: number; name: string; inherited?: boolean }[];
}
