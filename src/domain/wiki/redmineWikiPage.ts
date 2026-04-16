export interface RedmineWikiPageIndex {
  title: string;
  version: number;
  created_on: string;
  updated_on: string;
  parent?: { title: string };
}

export interface RedmineWikiPage {
  title: string;
  text: string;
  version: number;
  author: { id: number; name: string };
  comments?: string | null;
  created_on: string;
  updated_on: string;
  parent?: { title: string };
  attachments?: {
    id: number;
    filename: string;
    filesize: number;
    content_type: string;
    description: string;
    content_url: string;
    author: { id: number; name: string };
    created_on: string;
  }[];
}
