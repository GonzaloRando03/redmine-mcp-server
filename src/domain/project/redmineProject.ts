export interface IdName {
  id: number;
  name: string;
}

export interface CustomFieldValue {
  id: number;
  name: string;
  value: string | string[];
}

export interface RedmineProject {
  id: number;
  name: string;
  identifier: string;
  description: string | null;
  homepage: string | null;
  status: number;
  is_public: boolean;
  inherit_members: boolean;
  parent?: IdName;
  default_version?: IdName;
  default_assignee?: IdName;
  trackers?: IdName[];
  issue_categories?: IdName[];
  time_entry_activities?: IdName[];
  enabled_modules?: IdName[];
  issue_custom_fields?: IdName[];
  custom_fields?: CustomFieldValue[];
  created_on: string;
  updated_on: string;
}
