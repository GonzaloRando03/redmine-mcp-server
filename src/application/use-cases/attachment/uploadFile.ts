import { AttachmentService } from "@/application/services/attachmentService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { RedmineUploadResponse } from "@/domain/attachment/redmineAttachment";
import { UploadFileParams } from "@/domain/attachment/uploadFileParams";

export class UploadFile extends BaseUseCase<
  UploadFileParams,
  RedmineUploadResponse
> {
  private attachmentService: AttachmentService;

  constructor(attachmentService: AttachmentService) {
    super();
    this.attachmentService = attachmentService;
  }

  override execute(params: UploadFileParams): Promise<RedmineUploadResponse> {
    return this.attachmentService.uploadFile(params);
  }
}
