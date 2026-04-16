export interface IdName {
  id: number;
  name: string;
}

export interface RedmineJournal {
  id: number;
  user: IdName;
  notes: string;
  created_on: string;
  private_notes: boolean;
  details: {
    property: string;
    name: string;
    old_value?: string;
    new_value?: string;
  }[];
}

export interface RedmineAttachment {
  id: number;
  filename: string;
  filesize: number;
  content_type: string;
  description: string;
  content_url: string;
  author: IdName;
  created_on: string;
  thumbnail_url?: string;
}

export interface RedmineIssueRelation {
  id: number;
  issue_id: number;
  issue_to_id: number;
  relation_type: string;
  delay?: number | null;
}

export interface RedmineIssue {
  id: number;
  project: IdName;
  tracker: IdName;
  status: IdName & { is_closed?: boolean };
  priority: IdName;
  author: IdName;
  assigned_to?: IdName;
  category?: IdName;
  fixed_version?: IdName;
  parent?: { id: number };
  subject: string;
  description: string | null;
  start_date: string | null;
  due_date: string | null;
  done_ratio: number;
  is_private: boolean;
  estimated_hours: number | null;
  total_estimated_hours: number | null;
  spent_hours: number;
  total_spent_hours: number;
  custom_fields?: { id: number; name: string; value: string | string[] }[];
  created_on: string;
  updated_on: string;
  closed_on: string | null;
  // Optional fields (depend on `include` parameter)
  attachments?: RedmineAttachment[];
  relations?: RedmineIssueRelation[];
  changesets?: unknown[];
  journals?: RedmineJournal[];
  watchers?: IdName[];
  allowed_statuses?: IdName[];
  children?: {
    id: number;
    tracker: IdName;
    subject: string;
  }[];
}
