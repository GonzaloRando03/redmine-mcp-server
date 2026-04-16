export interface RedmineAttachment {
  id: number;
  filename: string;
  filesize: number;
  content_type: string;
  description?: string | null;
  content_url: string;
  thumbnail_url?: string;
  author: { id: number; name: string };
  created_on: string;
}

export interface RedmineUploadResponse {
  upload: { id?: number; token: string };
}
