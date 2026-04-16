export interface UpdateMyAccountParams {
  firstname?: string;
  lastname?: string;
  mail?: string;
  language?: string;
  custom_fields?: { id: number; value: string | string[] }[];
  mail_notification?: string;
  notified_project_ids?: number[];
}
