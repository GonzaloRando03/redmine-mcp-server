import { AttachmentService } from "@/application/services/attachmentService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { DeleteAttachmentParams } from "@/domain/attachment/deleteAttachmentParams";

export class DeleteAttachment extends BaseUseCase<
  DeleteAttachmentParams,
  void
> {
  private attachmentService: AttachmentService;

  constructor(attachmentService: AttachmentService) {
    super();
    this.attachmentService = attachmentService;
  }

  override execute(params: DeleteAttachmentParams): Promise<void> {
    return this.attachmentService.deleteAttachment(params);
  }
}
