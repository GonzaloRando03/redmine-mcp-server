export interface RedmineJournal {
  id: number;
  user: { id: number; name: string };
  notes: string | null;
  created_on: string;
  private_notes?: boolean;
  details: {
    property: string;
    name: string;
    old_value?: string | null;
    new_value?: string | null;
  }[];
}
