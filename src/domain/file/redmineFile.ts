export interface RedmineFile {
  id: number;
  filename: string;
  filesize: number;
  content_type: string;
  description?: string | null;
  content_url: string;
  thumbnail_url?: string;
  author: { id: number; name: string };
  created_on: string;
  version?: { id: number; name: string };
  digest: string;
  downloads: number;
}
