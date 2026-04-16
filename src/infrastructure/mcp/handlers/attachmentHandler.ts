import { AppContainer } from "@/infrastructure/mcp/container";
import { DeleteAttachmentParams } from "@/domain/attachment/deleteAttachmentParams";
import { GetAttachmentParams } from "@/domain/attachment/getAttachmentParams";
import { UpdateAttachmentParams } from "@/domain/attachment/updateAttachmentParams";
import { UploadFileParams } from "@/domain/attachment/uploadFileParams";

export async function handleAttachment(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    "getAttachment" | "updateAttachment" | "deleteAttachment" | "uploadFile"
  >,
): Promise<unknown> {
  switch (name) {
    case "get_attachment":
      return c.getAttachment.handle(args as unknown as GetAttachmentParams);
    case "update_attachment":
      return c.updateAttachment.handle(
        args as unknown as UpdateAttachmentParams,
      );
    case "delete_attachment":
      return c.deleteAttachment.handle(
        args as unknown as DeleteAttachmentParams,
      );
    case "upload_file": {
      const params = args as unknown as UploadFileParams;
      if (params.file_path === undefined) {
        throw new Error(
          "upload_file requires 'file_path' (path to a local file).",
        );
      }
      return c.uploadFile.handle(params);
    }
    default:
      return null;
  }
}
