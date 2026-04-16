import { AppContainer } from "@/infrastructure/mcp/container";
import { GetProjectParams } from "@/domain/project/getProjectParams";
import { CreateProjectParams } from "@/domain/project/createProjectParams";
import { UpdateProjectParams } from "@/domain/project/updateProjectParams";
import { ProjectIdParams } from "@/domain/project/projectIdParams";

export async function handleProject(
  name: string,
  args: Record<string, unknown>,
  c: Pick<
    AppContainer,
    | "listProjects"
    | "getProject"
    | "createProject"
    | "updateProject"
    | "deleteProject"
    | "archiveProject"
    | "unarchiveProject"
  >,
): Promise<unknown> {
  switch (name) {
    case "list_projects":
      return c.listProjects.handle(Object.keys(args).length ? args : undefined);
    case "get_project":
      return c.getProject.handle(args as unknown as GetProjectParams);
    case "create_project":
      return c.createProject.handle(args as unknown as CreateProjectParams);
    case "update_project":
      return c.updateProject.handle(args as unknown as UpdateProjectParams);
    case "delete_project":
      return c.deleteProject.handle(args as unknown as ProjectIdParams);
    case "archive_project":
      return c.archiveProject.handle(args as unknown as ProjectIdParams);
    case "unarchive_project":
      return c.unarchiveProject.handle(args as unknown as ProjectIdParams);
    default:
      return null;
  }
}
