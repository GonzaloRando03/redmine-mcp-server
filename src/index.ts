#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { createContainer } from "@/infrastructure/mcp/container";
import { createToolRouter } from "@/infrastructure/mcp/toolRouter";
import { toolList } from "@/infrastructure/mcp/toolList";

// ─── Configuración desde variables de entorno ─────────────────────────────────
const config = {
  apiKey: process.env.REDMINE_API_KEY,
  baseUrl: process.env.REDMINE_URL ?? "",
  username: process.env.REDMINE_USERNAME,
  password: process.env.REDMINE_PASSWORD,
  impersonate: process.env.REDMINE_IMPERSONATE,
};

const container = createContainer(config);
const handleToolCall = createToolRouter(container);

// ─── MCP Server ───────────────────────────────────────────────────────────────
const server = new Server(
  { name: "redmine-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => toolList);

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;
  return handleToolCall(name, args as Record<string, unknown>);
});

// ─── Arranque ─────────────────────────────────────────────────────────────────
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write("Redmine MCP server started (stdio)\n");
}

main().catch((err) => {
  process.stderr.write(
    `Fatal error: ${err instanceof Error ? err.message : String(err)}\n`,
  );
  process.exit(1);
});
