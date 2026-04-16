import { AttachmentService } from "@/application/services/attachmentService";
import { BaseUseCase } from "@/application/use-cases/baseUseCase";
import { GetAttachmentParams } from "@/domain/attachment/getAttachmentParams";
import { RedmineAttachment } from "@/domain/attachment/redmineAttachment";

export class GetAttachment extends BaseUseCase<
  GetAttachmentParams,
  RedmineAttachment
> {
  private attachmentService: AttachmentService;

  constructor(attachmentService: AttachmentService) {
    super();
    this.attachmentService = attachmentService;
  }

  override execute(params: GetAttachmentParams): Promise<RedmineAttachment> {
    return this.attachmentService.getAttachment(params);
  }
}
