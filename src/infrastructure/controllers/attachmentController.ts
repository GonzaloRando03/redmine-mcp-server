import { AttachmentService } from "@/application/services/attachmentService";
import { DeleteAttachmentParams } from "@/domain/attachment/deleteAttachmentParams";
import { GetAttachmentParams } from "@/domain/attachment/getAttachmentParams";
import {
  RedmineAttachment,
  RedmineUploadResponse,
} from "@/domain/attachment/redmineAttachment";
import { UpdateAttachmentParams } from "@/domain/attachment/updateAttachmentParams";
import { UploadFileParams } from "@/domain/attachment/uploadFileParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";
import * as fs from "fs";
import * as path from "path";

export class AttachmentController
  extends RedmineApiBaseController
  implements AttachmentService
{
  async getAttachment(params: GetAttachmentParams): Promise<RedmineAttachment> {
    const { id } = params;
    const raw = await this.request<{ attachment: RedmineAttachment }>(
      "GET",
      `/attachments/${encodeURIComponent(id)}.json`,
      undefined,
      "Get attachment",
    );
    return raw.attachment;
  }

  async updateAttachment(params: UpdateAttachmentParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/attachments/${encodeURIComponent(id)}.json`,
      { attachment: fields },
      "Update attachment",
    );
  }

  async deleteAttachment(params: DeleteAttachmentParams): Promise<void> {
    const { id } = params;
    await this.request(
      "DELETE",
      `/attachments/${encodeURIComponent(id)}.json`,
      undefined,
      "Delete attachment",
    );
  }

  async uploadFile(params: UploadFileParams): Promise<RedmineUploadResponse> {
    const { file_path, content_type, filename } = params;

    const resolvedPath = path.resolve(file_path);
    const buffer = fs.readFileSync(resolvedPath);

    return this.requestRaw<RedmineUploadResponse>(
      `/uploads.json?filename=${encodeURIComponent(filename)}`,
      buffer,
      content_type,
      "Upload file",
    );
  }
}
