import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateProjectFileParams } from "@/domain/file/createProjectFileParams";
import { ListProjectFilesParams } from "@/domain/file/listProjectFilesParams";

export async function handleFile(
  name: string,
  args: Record<string, unknown>,
  c: Pick<AppContainer, "listProjectFiles" | "createProjectFile">,
): Promise<unknown> {
  switch (name) {
    case "list_project_files":
      return c.listProjectFiles.handle(
        args as unknown as ListProjectFilesParams,
      );
    case "create_project_file":
      return c.createProjectFile.handle(
        args as unknown as CreateProjectFileParams,
      );
    default:
      return null;
  }
}
