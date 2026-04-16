export interface CreateIssueRelationParams {
  issue_id: number;
  issue_to_id: number;
  relation_type:
    | "relates"
    | "duplicates"
    | "duplicated"
    | "blocks"
    | "blocked"
    | "precedes"
    | "follows"
    | "copied_to"
    | "copied_from";
  delay?: number;
}
