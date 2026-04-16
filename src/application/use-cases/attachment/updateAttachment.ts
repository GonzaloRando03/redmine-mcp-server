import { AttachmentService } from "@/application/services/attachmentService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { UpdateAttachmentParams } from "@/domain/attachment/updateAttachmentParams";

export class UpdateAttachment extends BaseUseCase<
  UpdateAttachmentParams,
  void
> {
  private attachmentService: AttachmentService;

  constructor(attachmentService: AttachmentService) {
    super();
    this.attachmentService = attachmentService;
  }

  override execute(params: UpdateAttachmentParams): Promise<void> {
    return this.attachmentService.updateAttachment(params);
  }
}
