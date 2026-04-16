import { describe, it, expect } from "vitest";
import { attachmentCtrl } from "./setup";
import { GetAttachment } from "@/application/use-cases/attachment/getAttachment";
import { UpdateAttachment } from "@/application/use-cases/attachment/updateAttachment";
import { DeleteAttachment } from "@/application/use-cases/attachment/deleteAttachment";
import { UploadFile } from "@/application/use-cases/attachment/uploadFile";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

const getAttachment = new GetAttachment(attachmentCtrl);
const updateAttachment = new UpdateAttachment(attachmentCtrl);
const deleteAttachment = new DeleteAttachment(attachmentCtrl);
const uploadFile = new UploadFile(attachmentCtrl);

describe("Attachment", () => {
  it("getAttachment obtiene metadatos de un adjunto", async () => {
    const result = await getAttachment.handle({ id: 1 });
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("filename");
    expect(result).toHaveProperty("content_url");
    expect(result).toHaveProperty("author");
  });

  it("uploadFile sube un archivo con base64 y devuelve token", async () => {
    const content = Buffer.from("contenido de prueba").toString("base64");
    const result = await uploadFile.handle({
      filename: "test.txt",
      content_type: "text/plain",
      content,
    });
    expect(result).toHaveProperty("upload");
    expect(result.upload).toHaveProperty("token");
  });

  it("uploadFile sube un archivo con file_path y devuelve token", async () => {
    const tmpFile = path.join(os.tmpdir(), "redmine-mcp-test.txt");
    fs.writeFileSync(tmpFile, "contenido desde fichero");
    try {
      const result = await uploadFile.handle({
        filename: "redmine-mcp-test.txt",
        content_type: "text/plain",
        file_path: tmpFile,
      });
      expect(result).toHaveProperty("upload");
      expect(result.upload).toHaveProperty("token");
    } finally {
      fs.unlinkSync(tmpFile);
    }
  });

  it("updateAttachment actualiza metadatos de un adjunto", async () => {
    await expect(
      updateAttachment.handle({ id: 1, description: "updated" }),
    ).resolves.not.toThrow();
  });

  it("deleteAttachment elimina un adjunto", async () => {
    await expect(deleteAttachment.handle({ id: 1 })).resolves.not.toThrow();
  });
});
