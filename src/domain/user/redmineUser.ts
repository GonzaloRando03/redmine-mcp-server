export interface IdName {
  id: number;
  name: string;
}

export interface CustomFieldValue {
  id: number;
  name: string;
  value: string | string[];
}

export interface UserMembership {
  id: number;
  project: IdName;
  roles: {
    id: number;
    name: string;
    inherited?: boolean;
  }[];
}

export interface RedmineUser {
  id: number;
  login: string;
  admin: boolean;
  firstname: string;
  lastname: string;
  mail: string;
  created_on: string;
  updated_on: string;
  last_login_on: string | null;
  passwd_changed_on: string | null;
  avatar_url?: string;
  twofa_scheme?: string | null;
  api_key?: string;
  status: number;
  custom_fields?: CustomFieldValue[];
  // Optional (with include)
  auth_source?: IdName;
  groups?: IdName[];
  memberships?: UserMembership[];
}
