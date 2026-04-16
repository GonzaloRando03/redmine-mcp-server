export interface GetGroupParams {
  id: number;
  include?: ("users" | "memberships")[];
}
