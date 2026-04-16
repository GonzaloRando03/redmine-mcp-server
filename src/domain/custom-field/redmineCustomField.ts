export interface RedmineCustomField {
  id: number;
  name: string;
  customized_type: string;
  field_format: string;
  regexp?: string;
  min_length?: number;
  max_length?: number;
  is_required?: boolean;
  is_filter?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  default_value?: string;
  visible?: boolean;
  possible_values?: { value: string; label?: string }[];
  trackers?: { id: number; name: string }[];
  roles?: { id: number; name: string }[];
}
