import { AppContainer } from "@/infrastructure/mcp/container";
import { handleProject } from "@/infrastructure/mcp/handlers/projectHandler";
import { handleIssue } from "@/infrastructure/mcp/handlers/issueHandler";
import { handleUser } from "@/infrastructure/mcp/handlers/userHandler";
import { handleTimeEntry } from "@/infrastructure/mcp/handlers/timeEntryHandler";
import { handleGroup } from "@/infrastructure/mcp/handlers/groupHandler";
import { handleMembership } from "@/infrastructure/mcp/handlers/membershipHandler";
import { handleVersion } from "@/infrastructure/mcp/handlers/versionHandler";
import { handleIssueCategory } from "@/infrastructure/mcp/handlers/issueCategoryHandler";
import { handleIssueRelation } from "@/infrastructure/mcp/handlers/issueRelationHandler";
import { handleWiki } from "@/infrastructure/mcp/handlers/wikiHandler";
import { handleNews } from "@/infrastructure/mcp/handlers/newsHandler";
import { handleAttachment } from "@/infrastructure/mcp/handlers/attachmentHandler";
import { handleFile } from "@/infrastructure/mcp/handlers/fileHandler";
import { handleSearch } from "@/infrastructure/mcp/handlers/searchHandler";
import { handleEnumeration } from "@/infrastructure/mcp/handlers/enumerationHandler";
import { handleCatalog } from "@/infrastructure/mcp/handlers/catalogHandler";
import { handleRole } from "@/infrastructure/mcp/handlers/roleHandler";
import { handleJournal } from "@/infrastructure/mcp/handlers/journalHandler";
import { handleAgileSprint } from "@/infrastructure/mcp/handlers/agileSprintHandler";

type McpToolResponse =
  | { content: { type: "text"; text: string }[] }
  | { content: { type: "text"; text: string }[]; isError: true };

export function createToolRouter(
  container: AppContainer,
): (name: string, args: Record<string, unknown>) => Promise<McpToolResponse> {
  const handlers = [
    (n: string, a: Record<string, unknown>) => handleProject(n, a, container),
    (n: string, a: Record<string, unknown>) => handleIssue(n, a, container),
    (n: string, a: Record<string, unknown>) => handleUser(n, a, container),
    (n: string, a: Record<string, unknown>) => handleTimeEntry(n, a, container),
    (n: string, a: Record<string, unknown>) => handleGroup(n, a, container),
    (n: string, a: Record<string, unknown>) =>
      handleMembership(n, a, container),
    (n: string, a: Record<string, unknown>) => handleVersion(n, a, container),
    (n: string, a: Record<string, unknown>) =>
      handleIssueCategory(n, a, container),
    (n: string, a: Record<string, unknown>) =>
      handleIssueRelation(n, a, container),
    (n: string, a: Record<string, unknown>) => handleWiki(n, a, container),
    (n: string, a: Record<string, unknown>) => handleNews(n, a, container),
    (n: string, a: Record<string, unknown>) =>
      handleAttachment(n, a, container),
    (n: string, a: Record<string, unknown>) => handleFile(n, a, container),
    (n: string, a: Record<string, unknown>) => handleSearch(n, a, container),
    (n: string, a: Record<string, unknown>) =>
      handleEnumeration(n, a, container),
    (n: string, a: Record<string, unknown>) => handleCatalog(n, a, container),
    (n: string, a: Record<string, unknown>) => handleRole(n, a, container),
    (n: string, a: Record<string, unknown>) => handleJournal(n, a, container),
    (n: string, a: Record<string, unknown>) =>
      handleAgileSprint(n, a, container),
  ];

  return async (name, args) => {
    try {
      for (const handler of handlers) {
        const result = await handler(name, args);
        if (result === null) continue;

        const text =
          result !== undefined
            ? JSON.stringify(result, null, 2)
            : JSON.stringify({ success: true });
        return {
          content: [{ type: "text", text }],
        };
      }

      return {
        content: [{ type: "text", text: `Unknown tool: ${name}` }],
        isError: true,
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true,
      };
    }
  };
}
