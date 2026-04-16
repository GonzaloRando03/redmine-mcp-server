export interface UploadFileParams {
  filename: string;
  content_type: string;
  /** Base64-encoded file content. Mutually exclusive with file_path. */
  content?: string;
  /** Absolute or relative path to the local file to upload. Mutually exclusive with content. */
  file_path?: string;
}
