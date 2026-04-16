export interface CreateUserParams {
  login: string;
  firstname: string;
  lastname: string;
  mail: string;
  password?: string;
  auth_source_id?: number | null;
  mail_notification?: string;
  must_change_passwd?: boolean;
  generate_password?: boolean;
  status?: number;
  admin?: boolean;
  language?: string;
  custom_fields?: { id: number; value: string | string[] }[];
  send_information?: boolean;
}
