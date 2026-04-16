export interface UploadFileParams {
  filename: string;
  content_type: string;
  /** Absolute or relative path to the local file to upload. */
  file_path: string;
}
