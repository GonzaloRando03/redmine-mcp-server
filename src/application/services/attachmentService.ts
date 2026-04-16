import { DeleteAttachmentParams } from "@/domain/attachment/deleteAttachmentParams";
import { GetAttachmentParams } from "@/domain/attachment/getAttachmentParams";
import {
  RedmineAttachment,
  RedmineUploadResponse,
} from "@/domain/attachment/redmineAttachment";
import { UpdateAttachmentParams } from "@/domain/attachment/updateAttachmentParams";
import { UploadFileParams } from "@/domain/attachment/uploadFileParams";

export interface AttachmentService {
  getAttachment(params: GetAttachmentParams): Promise<RedmineAttachment>;
  updateAttachment(params: UpdateAttachmentParams): Promise<void>;
  deleteAttachment(params: DeleteAttachmentParams): Promise<void>;
  uploadFile(params: UploadFileParams): Promise<RedmineUploadResponse>;
}
