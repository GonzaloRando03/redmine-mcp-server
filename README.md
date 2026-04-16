# Redmine MCP Server

MCP (Model Context Protocol) server para Redmine, desarrollado en TypeScript.

## Requisitos

- Node.js 18+
- Una instancia de Redmine con API REST habilitada
- API Key de Redmine

## Instalación

```bash
npm install
npm run build
```

## Configuración

Variables de entorno:

| Variable          | Descripción                                             | Requerida |
| ----------------- | ------------------------------------------------------- | --------- |
| `REDMINE_URL`     | URL base de Redmine (ej: `https://redmine.example.com`) | Sí        |
| `REDMINE_API_KEY` | API Key de Redmine                                      | Sí        |

## Uso con VS Code / Claude Desktop

Añadir al archivo de configuración MCP:

```json
{
  "mcpServers": {
    "redmine": {
      "command": "node",
      "args": ["/ruta/al/dist/index.js"],
      "env": {
        "REDMINE_URL": "https://redmine.example.com",
        "REDMINE_API_KEY": "tu-api-key"
      }
    }
  }
}
```

## Herramientas disponibles

### Projects (7)

- `list_projects` — Lista proyectos
- `get_project` — Detalle de proyecto
- `create_project` — Crear proyecto
- `update_project` — Actualizar proyecto
- `archive_project` — Archivar proyecto
- `unarchive_project` — Desarchivar proyecto
- `delete_project` — Eliminar proyecto

### Issues (7)

- `list_issues` — Lista issues con filtros
- `get_issue` — Detalle de issue
- `create_issue` — Crear issue
- `update_issue` — Actualizar issue
- `delete_issue` — Eliminar issue
- `add_watcher` — Añadir watcher
- `remove_watcher` — Eliminar watcher

### Users (8)

- `list_users` — Lista usuarios
- `get_user` — Detalle de usuario
- `create_user` — Crear usuario
- `update_user` — Actualizar usuario
- `delete_user` — Eliminar usuario
- `get_current_user` — Usuario actual
- `get_my_account` — Mi cuenta
- `update_my_account` — Actualizar mi cuenta

### Time Entries (5)

- `list_time_entries` — Lista entradas de tiempo
- `get_time_entry` — Detalle
- `create_time_entry` — Crear
- `update_time_entry` — Actualizar
- `delete_time_entry` — Eliminar

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

## Desarrollo

```bash
npm run dev # Ejecutar en modo desarrollo
npm test # Ejecutar tests
npm run build # Build de producción
```

## Arquitectura

El proyecto sigue Clean Architecture:

```
src/
├── domain/ # Tipos, interfaces, errores
├── application/ # Servicios (interfaces) y use cases
└── infrastructure/ # Controllers (HTTP), MCP server, utils
```

## Licencia

MIT
