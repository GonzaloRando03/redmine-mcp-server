import { RedmineMembership } from "@/domain/membership/redmineMembership";

export interface ListProjectMembershipsResult {
  memberships: RedmineMembership[];
  total_count: number;
  offset: number;
  limit: number;
}
