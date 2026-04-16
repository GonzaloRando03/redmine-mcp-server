export interface RedmineNews {
  id: number;
  project: { id: number; name: string };
  author: { id: number; name: string };
  title: string;
  summary: string | null;
  description: string | null;
  created_on: string;
  comments_count?: number;
  link?: string;
}
