import { AppContainer } from "@/infrastructure/mcp/container";
import { CreateVersionParams } from "@/domain/version/createVersionParams";
import { GetVersionParams } from "@/domain/version/getVersionParams";
import { ListProjectVersionsParams } from "@/domain/version/listProjectVersionsParams";
import { UpdateVersionParams } from "@/domain/version/updateVersionParams";

export async function handleVersion(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listProjectVersions"
    | "getVersion"
    | "createVersion"
    | "updateVersion"
    | "deleteVersion"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_project_versions":
      return c.listProjectVersions.handle(
        args as unknown as ListProjectVersionsParams,
      );
    case "get_version":
      return c.getVersion.handle(args as unknown as GetVersionParams);
    case "create_version":
      return c.createVersion.handle(args as unknown as CreateVersionParams);
    case "update_version":
      return c.updateVersion.handle(args as unknown as UpdateVersionParams);
    case "delete_version":
      return c.deleteVersion.handle(args as unknown as { id: number });
    default:
      return null;
  }
}
