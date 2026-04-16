# Redmine MCP Server

MCP (Model Context Protocol) server for Redmine, built with TypeScript.

## Requirements

- Node.js 18+
- A Redmine instance with REST API enabled
- Redmine API Key

## Installation

```bash
npm install
npm run build
```

## Configuration

Environment variables:

| Variable          | Description                                           | Required |
| ----------------- | ----------------------------------------------------- | -------- |
| `REDMINE_URL`     | Redmine base URL (e.g. `https://redmine.example.com`) | Yes      |
| `REDMINE_API_KEY` | Redmine API Key                                       | Yes      |

## Usage with VS Code / Claude Desktop

Add to your MCP configuration file:

```json
{
  "mcpServers": {
    "redmine": {
      "command": "npx",
      "args": ["-y", "redmine-server-mcp@latest"]
      "env": {
        "REDMINE_URL": "https://redmine.example.com",
        "REDMINE_API_KEY": "your-api-key"
      }
    }
  }
}
```

## Available Tools

### Projects (7)

- `list_projects` — List projects
- `get_project` — Project details
- `create_project` — Create project
- `update_project` — Update project
- `archive_project` — Archive project
- `unarchive_project` — Unarchive project
- `delete_project` — Delete project

### Issues (7)

- `list_issues` — List issues with filters
- `get_issue` — Issue details
- `create_issue` — Create issue
- `update_issue` — Update issue
- `delete_issue` — Delete issue
- `add_watcher` — Add watcher
- `remove_watcher` — Remove watcher

### Users (8)

- `list_users` — List users
- `get_user` — User details
- `create_user` — Create user
- `update_user` — Update user
- `delete_user` — Delete user
- `get_current_user` — Current user
- `get_my_account` — My account
- `update_my_account` — Update my account

### Time Entries (5)

- `list_time_entries` — List time entries
- `get_time_entry` — Details
- `create_time_entry` — Create
- `update_time_entry` — Update
- `delete_time_entry` — Delete

### Groups (7)

- `list_groups`, `get_group`, `create_group`, `update_group`, `delete_group`
- `add_user_to_group`, `remove_user_from_group`

### Memberships (5)

- `list_project_memberships`, `get_membership`, `create_project_membership`, `update_membership`, `delete_membership`

### Versions (5)

- `list_project_versions`, `get_version`, `create_version`, `update_version`, `delete_version`

### Issue Categories (5)

- `list_issue_categories`, `get_issue_category`, `create_issue_category`, `update_issue_category`, `delete_issue_category`

### Issue Relations (4)

- `list_issue_relations`, `get_issue_relation`, `create_issue_relation`, `delete_issue_relation`

### Wiki (5)

- `list_wiki_pages`, `get_wiki_page`, `get_wiki_page_version`, `create_or_update_wiki_page`, `delete_wiki_page`

### News (5)

- `list_all_news`, `list_project_news`, `get_news`, `create_news`, `update_news`

### Attachments & Files (6)

- `get_attachment`, `update_attachment`, `delete_attachment`, `upload_file`
- `list_project_files`, `create_project_file`

### Search (2)

- `search`, `search_in_project`

### Enumerations (3)

- `list_issue_priorities`, `list_time_entry_activities`, `list_document_categories`

### Catalogs (4)

- `list_trackers`, `list_issue_statuses`, `list_custom_fields`, `list_queries`

### Roles (2)

- `list_roles`, `get_role`

### Journals (1)

- `update_journal`

## Development

```bash
npm run dev # Run in development mode
npm test    # Run tests
npm run build # Production build
```

## Architecture

The project follows Clean Architecture:

```
src/
├── domain/         # Types, interfaces, errors
├── application/    # Services (interfaces) and use cases
└── infrastructure/ # Controllers (HTTP), MCP server, utils
```

## License

MIT
