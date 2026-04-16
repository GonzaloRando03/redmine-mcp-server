export const toolList = {
  tools: [
    // ── Project ─────────────────────────────────────────────────────────────
    {
      name: "list_projects",
      description:
        "Lists all projects in Redmine with pagination and optional filters.",
      inputSchema: {
        type: "object",
        properties: {
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
          include: {
            type: "string",
            description:
              "Comma-separated: trackers, issue_categories, time_entry_activities, enabled_modules, issue_custom_fields",
          },
          status: {
            type: "string",
            description:
              "Filter by status. Values: 1=active, 5=closed. Operators: = (default), ! (not equal). Examples: 1, 1|5, !1",
          },
          id: {
            type: "string",
            description:
              "Filter by project ID. Special values: mine, bookmarks. Examples: 1|2|3, mine",
          },
          name: {
            type: "string",
            description:
              "Filter by project name. Operators: ~ (contains), !~ (not contains), ^ (starts with), $ (ends with)",
          },
          description: {
            type: "string",
            description:
              "Filter by description. Operators: ~ (contains), !~ (not contains), ^ (starts with), $ (ends with)",
          },
          parent_id: {
            type: "string",
            description:
              "Filter by parent project. Operators: = (default), ! (not equal), * (any=subproject), !* (none=root). Values: ID, mine, bookmarks",
          },
          is_public: {
            type: "string",
            description: "Filter by public/private: 1=public, 0=private",
          },
          created_on: {
            type: "string",
            description:
              "Filter by creation date. Examples: >=2024-01-01, t (today), >t-7 (last 7 days), lm (last month)",
          },
          updated_on: {
            type: "string",
            description:
              "Filter by last updated date. Same format as created_on",
          },
        },
      },
    },
    {
      name: "get_project",
      description:
        "Gets details of a project by its numeric ID or string identifier.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          include: {
            type: "string",
            description:
              "Comma-separated: trackers, issue_categories, time_entry_activities, enabled_modules, issue_custom_fields",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_project",
      description: "Creates a new project in Redmine.",
      inputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Project display name",
          },
          identifier: {
            type: "string",
            description:
              "Unique identifier (lowercase, hyphens, 1-100 chars). Cannot be changed after creation",
          },
          description: {
            type: "string",
            description: "Project description",
          },
          homepage: {
            type: "string",
            description: "Project homepage URL",
          },
          is_public: {
            type: "boolean",
            description: "Whether the project is public (default true)",
          },
          parent_id: {
            type: "number",
            description: "ID of the parent project (for subprojects)",
          },
          inherit_members: {
            type: "boolean",
            description:
              "Inherit members from parent project (only for subprojects)",
          },
          default_assigned_to_id: {
            type: "number",
            description: "Default assignee ID for new issues",
          },
          default_version_id: {
            type: "number",
            description: "Default target version ID for new issues",
          },
          default_issue_query_id: {
            type: "number",
            description: "Default saved query ID for issue list",
          },
          tracker_ids: {
            type: "array",
            items: { type: "number" },
            description: "IDs of trackers available in this project",
          },
          enabled_module_names: {
            type: "array",
            items: { type: "string" },
            description:
              "Module names: issue_tracking, time_tracking, news, documents, files, wiki, repository, boards, calendar, gantt",
          },
          issue_custom_field_ids: {
            type: "array",
            items: { type: "number" },
            description: "IDs of issue custom fields enabled for this project",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values for the project",
          },
        },
        required: ["name", "identifier"],
      },
    },
    {
      name: "update_project",
      description: "Updates an existing project in Redmine.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          name: {
            type: "string",
            description: "Project display name",
          },
          identifier: {
            type: "string",
            description: "Project identifier",
          },
          description: {
            type: "string",
            description: "Project description",
          },
          homepage: {
            type: "string",
            description: "Project homepage URL",
          },
          is_public: {
            type: "boolean",
            description: "Whether the project is public",
          },
          parent_id: {
            type: "number",
            description: "ID of the parent project",
          },
          inherit_members: {
            type: "boolean",
            description: "Inherit members from parent project",
          },
          default_assigned_to_id: {
            type: "number",
            description: "Default assignee ID for new issues",
          },
          default_version_id: {
            type: "number",
            description: "Default target version ID for new issues",
          },
          default_issue_query_id: {
            type: "number",
            description: "Default saved query ID for issue list",
          },
          tracker_ids: {
            type: "array",
            items: { type: "number" },
            description: "IDs of trackers available in this project",
          },
          enabled_module_names: {
            type: "array",
            items: { type: "string" },
            description:
              "Module names: issue_tracking, time_tracking, news, documents, files, wiki, repository, boards, calendar, gantt",
          },
          issue_custom_field_ids: {
            type: "array",
            items: { type: "number" },
            description: "IDs of issue custom fields enabled for this project",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values for the project",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_project",
      description:
        "Deletes a project and all its related data (issues, wiki, etc.).",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "archive_project",
      description: "Archives a project, making it read-only.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "unarchive_project",
      description: "Unarchives a previously archived project.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
        },
        required: ["id"],
      },
    },
    // ── Issue ──────────────────────────────────────────────────────────────
    {
      name: "list_issues",
      description:
        "Lists issues in Redmine with advanced filters, sorting and pagination.",
      inputSchema: {
        type: "object",
        properties: {
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
          sort: {
            type: "string",
            description:
              "Sort field and direction. Examples: status:asc, priority:desc, updated_on:desc. Multiple: status:asc,priority:desc",
          },
          include: {
            type: "string",
            description:
              "Comma-separated: attachments, relations, changesets, journals, watchers, allowed_statuses, children",
          },
          issue_id: {
            type: "string",
            description:
              "Filter by issue ID(s). Comma-separated or range. Examples: 1,2,3",
          },
          project_id: {
            type: ["string", "number"],
            description: "Filter by project ID or identifier",
          },
          subproject_id: {
            type: "string",
            description:
              "Filter by subproject. Use !* to exclude subproject issues",
          },
          tracker_id: {
            type: "number",
            description: "Filter by tracker ID",
          },
          status_id: {
            type: "string",
            description:
              "Filter by status. Values: open, closed, * (all), or numeric ID",
          },
          priority_id: {
            type: "number",
            description: "Filter by priority ID",
          },
          assigned_to_id: {
            type: "string",
            description:
              "Filter by assignee. Numeric ID or me for current user",
          },
          author_id: {
            type: "number",
            description: "Filter by author ID",
          },
          category_id: {
            type: "number",
            description: "Filter by issue category ID",
          },
          fixed_version_id: {
            type: "number",
            description: "Filter by target version ID",
          },
          parent_id: {
            type: "number",
            description: "Filter by parent issue ID",
          },
          subject: {
            type: "string",
            description:
              "Filter by subject. Use ~ prefix for contains: ~keyword",
          },
          created_on: {
            type: "string",
            description:
              "Filter by creation date. Examples: >=2024-01-01, <=2024-12-31, ><2024-01-01|2024-12-31",
          },
          updated_on: {
            type: "string",
            description:
              "Filter by last updated date. Same format as created_on",
          },
        },
      },
    },
    {
      name: "get_issue",
      description:
        "Gets full details of a single issue by its numeric ID, optionally including related data.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric issue ID",
          },
          include: {
            type: "string",
            description:
              "Comma-separated: attachments, relations, changesets, journals, watchers, allowed_statuses, children",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_issue",
      description: "Creates a new issue in Redmine.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: "number",
            description: "ID of the project to create the issue in (required)",
          },
          subject: {
            type: "string",
            description: "Issue subject / title (required)",
          },
          tracker_id: {
            type: "number",
            description: "Tracker ID (Bug, Feature, etc.)",
          },
          status_id: {
            type: "number",
            description: "Status ID",
          },
          priority_id: {
            type: "number",
            description: "Priority ID",
          },
          description: {
            type: "string",
            description: "Issue description (supports Textile/Markdown)",
          },
          category_id: {
            type: "number",
            description: "Issue category ID",
          },
          fixed_version_id: {
            type: "number",
            description: "Target version ID",
          },
          assigned_to_id: {
            type: "number",
            description: "Assignee user ID",
          },
          parent_issue_id: {
            type: "number",
            description: "Parent issue ID (for subtasks)",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values",
          },
          watcher_user_ids: {
            type: "array",
            items: { type: "number" },
            description: "User IDs to add as watchers",
          },
          is_private: {
            type: "boolean",
            description: "Whether the issue is private",
          },
          estimated_hours: {
            type: "number",
            description: "Estimated hours",
          },
          done_ratio: {
            type: "number",
            description: "Percentage done (0-100)",
          },
          start_date: {
            type: "string",
            description: "Start date (YYYY-MM-DD)",
          },
          due_date: {
            type: "string",
            description: "Due date (YYYY-MM-DD)",
          },
          uploads: {
            type: "array",
            items: {
              type: "object",
              properties: {
                token: {
                  type: "string",
                  description: "Upload token from file upload",
                },
                filename: { type: "string", description: "File name" },
                content_type: {
                  type: "string",
                  description: "MIME content type",
                },
                description: {
                  type: "string",
                  description: "File description",
                },
              },
              required: ["token", "filename"],
            },
            description: "Attachments (requires prior upload to get tokens)",
          },
        },
        required: ["project_id", "subject"],
      },
    },
    {
      name: "update_issue",
      description:
        "Updates an existing issue. Can change fields, add notes/comments, or change status.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric issue ID to update (required)",
          },
          project_id: {
            type: "number",
            description: "Move issue to another project",
          },
          subject: {
            type: "string",
            description: "Issue subject / title",
          },
          tracker_id: {
            type: "number",
            description: "Tracker ID",
          },
          status_id: {
            type: "number",
            description: "Status ID",
          },
          priority_id: {
            type: "number",
            description: "Priority ID",
          },
          description: {
            type: "string",
            description: "Issue description",
          },
          category_id: {
            type: "number",
            description: "Issue category ID",
          },
          fixed_version_id: {
            type: "number",
            description: "Target version ID",
          },
          assigned_to_id: {
            type: "number",
            description: "Assignee user ID",
          },
          parent_issue_id: {
            type: "number",
            description: "Parent issue ID",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values",
          },
          is_private: {
            type: "boolean",
            description: "Whether the issue is private",
          },
          estimated_hours: {
            type: "number",
            description: "Estimated hours",
          },
          done_ratio: {
            type: "number",
            description: "Percentage done (0-100)",
          },
          start_date: {
            type: "string",
            description: "Start date (YYYY-MM-DD)",
          },
          due_date: {
            type: "string",
            description: "Due date (YYYY-MM-DD)",
          },
          notes: {
            type: "string",
            description:
              "Comment/note to add to the issue (visible in journal)",
          },
          private_notes: {
            type: "boolean",
            description: "Whether the note is private",
          },
          uploads: {
            type: "array",
            items: {
              type: "object",
              properties: {
                token: {
                  type: "string",
                  description: "Upload token from file upload",
                },
                filename: { type: "string", description: "File name" },
                content_type: {
                  type: "string",
                  description: "MIME content type",
                },
                description: {
                  type: "string",
                  description: "File description",
                },
              },
              required: ["token", "filename"],
            },
            description: "Attachments (requires prior upload to get tokens)",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_issue",
      description: "Deletes an issue permanently.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric issue ID to delete",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "add_watcher",
      description: "Adds a user as watcher/observer to an issue.",
      inputSchema: {
        type: "object",
        properties: {
          issue_id: {
            type: "number",
            description: "Numeric issue ID",
          },
          user_id: {
            type: "number",
            description: "User ID to add as watcher",
          },
        },
        required: ["issue_id", "user_id"],
      },
    },
    {
      name: "remove_watcher",
      description: "Removes a user from the watchers of an issue.",
      inputSchema: {
        type: "object",
        properties: {
          issue_id: {
            type: "number",
            description: "Numeric issue ID",
          },
          user_id: {
            type: "number",
            description: "User ID to remove from watchers",
          },
        },
        required: ["issue_id", "user_id"],
      },
    },
    // ── User ──────────────────────────────────────────────────────────────
    {
      name: "list_users",
      description:
        "Lists users in Redmine with optional filters. Requires admin privileges.",
      inputSchema: {
        type: "object",
        properties: {
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
          include: {
            type: "string",
            description: "Comma-separated: auth_source",
          },
          status: {
            type: "string",
            description:
              "Filter by status. Values: 1=active, 2=registered, 3=locked. Operators: = (default), ! (not equal). Examples: 1, 1|2, !3",
          },
          name: {
            type: "string",
            description:
              "Filter by name, login, or email (contains search). Examples: john, admin",
          },
          group_id: {
            type: "string",
            description: "Filter by group membership. Value is the group ID",
          },
          login: {
            type: "string",
            description:
              "Filter by login. Operators: ~ (contains), = (exact), ! (not equal), ^ (starts with), $ (ends with)",
          },
          firstname: {
            type: "string",
            description:
              "Filter by first name. Operators: ~ (contains), = (exact), ! (not equal), ^ (starts with), $ (ends with)",
          },
          lastname: {
            type: "string",
            description:
              "Filter by last name. Operators: ~ (contains), = (exact), ! (not equal), ^ (starts with), $ (ends with)",
          },
          mail: {
            type: "string",
            description:
              "Filter by email address. Operators: ~ (contains), = (exact), ! (not equal), ^ (starts with), $ (ends with)",
          },
          admin: {
            type: "string",
            description: "Filter by admin privilege: 1=admin, 0=non-admin",
          },
          auth_source_id: {
            type: "string",
            description:
              "Filter by authentication source. Operators: = (default), ! (not equal), * (any), !* (none)",
          },
          twofa_scheme: {
            type: "string",
            description:
              "Filter by two-factor authentication scheme. Operators: = (default), ! (not equal), * (any), !* (none)",
          },
          created_on: {
            type: "string",
            description:
              "Filter by creation date. Examples: >=2024-01-01, >t-30, lm",
          },
          last_login_on: {
            type: "string",
            description:
              "Filter by last login date. Examples: >=2024-01-01, >t-30, !* (never logged in)",
          },
        },
      },
    },
    {
      name: "get_user",
      description:
        "Gets details of a user by their numeric ID. Can include memberships and groups.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric user ID",
          },
          include: {
            type: "string",
            description: "Comma-separated: memberships, groups, auth_source",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "get_current_user",
      description:
        "Gets the details of the currently authenticated user (the API key owner).",
      inputSchema: {
        type: "object",
        properties: {
          include: {
            type: "string",
            description: "Comma-separated: memberships, groups, auth_source",
          },
        },
      },
    },
    {
      name: "create_user",
      description: "Creates a new user in Redmine. Requires admin privileges.",
      inputSchema: {
        type: "object",
        properties: {
          login: {
            type: "string",
            description: "User login name (required, unique)",
          },
          firstname: {
            type: "string",
            description: "First name (required)",
          },
          lastname: {
            type: "string",
            description: "Last name (required)",
          },
          mail: {
            type: "string",
            description: "Email address (required)",
          },
          password: {
            type: "string",
            description:
              "Password. Ignored if auth_source_id is set or generate_password is true",
          },
          auth_source_id: {
            type: "number",
            description:
              "External authentication source ID (e.g., LDAP). Set to null for local auth",
          },
          mail_notification: {
            type: "string",
            description:
              "Email notification preference: all, selected, only_my_events, only_assigned, only_owner, none",
          },
          must_change_passwd: {
            type: "boolean",
            description: "Force the user to change password at next login",
          },
          generate_password: {
            type: "boolean",
            description: "Generate a random password automatically",
          },
          status: {
            type: "number",
            description: "User status: 1=active, 2=registered, 3=locked",
          },
          admin: {
            type: "boolean",
            description: "Whether the user has admin privileges",
          },
          language: {
            type: "string",
            description: "User language preference (e.g., en, es, fr)",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values",
          },
          send_information: {
            type: "boolean",
            description: "Send account information email to the user",
          },
        },
        required: ["login", "firstname", "lastname", "mail"],
      },
    },
    {
      name: "update_user",
      description: "Updates an existing user. Requires admin privileges.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric user ID to update (required)",
          },
          login: {
            type: "string",
            description: "User login name",
          },
          firstname: {
            type: "string",
            description: "First name",
          },
          lastname: {
            type: "string",
            description: "Last name",
          },
          mail: {
            type: "string",
            description: "Email address",
          },
          password: {
            type: "string",
            description: "New password",
          },
          auth_source_id: {
            type: "number",
            description:
              "External authentication source ID. Set to null for local auth",
          },
          mail_notification: {
            type: "string",
            description:
              "Email notification preference: all, selected, only_my_events, only_assigned, only_owner, none",
          },
          must_change_passwd: {
            type: "boolean",
            description: "Force password change at next login",
          },
          generate_password: {
            type: "boolean",
            description: "Generate a random password automatically",
          },
          status: {
            type: "number",
            description: "User status: 1=active, 2=registered, 3=locked",
          },
          admin: {
            type: "boolean",
            description: "Whether the user has admin privileges",
          },
          language: {
            type: "string",
            description: "User language preference",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values",
          },
          group_ids: {
            type: "array",
            items: { type: "number" },
            description:
              "Group IDs to assign the user to. Admin-only. Replaces all current group memberships",
          },
          send_information: {
            type: "boolean",
            description: "Send account information email to the user",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_user",
      description: "Deletes a user permanently. Requires admin privileges.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric user ID to delete",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "get_my_account",
      description:
        "Gets the account details of the currently authenticated user.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    {
      name: "update_my_account",
      description:
        "Updates the account details of the currently authenticated user.",
      inputSchema: {
        type: "object",
        properties: {
          firstname: {
            type: "string",
            description: "First name",
          },
          lastname: {
            type: "string",
            description: "Last name",
          },
          mail: {
            type: "string",
            description: "Email address",
          },
          language: {
            type: "string",
            description: "Language preference (e.g., en, es, fr)",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values",
          },
          mail_notification: {
            type: "string",
            description:
              "Email notification preference: all, selected, only_my_events, only_assigned, only_owner, none",
          },
          notified_project_ids: {
            type: "array",
            items: { type: "number" },
            description:
              "Project IDs for email notifications (only when mail_notification=selected)",
          },
        },
      },
    },
    // ── Time Entry ────────────────────────────────────────────────────────
    {
      name: "list_time_entries",
      description:
        "Lists time entries in Redmine with optional filters by user, project, issue, activity and date range.",
      inputSchema: {
        type: "object",
        properties: {
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
          user_id: {
            type: "number",
            description: "Filter by user ID",
          },
          project_id: {
            type: ["string", "number"],
            description: "Filter by project ID or identifier",
          },
          issue_id: {
            type: "number",
            description: "Filter by issue ID",
          },
          activity_id: {
            type: "number",
            description: "Filter by activity ID",
          },
          spent_on: {
            type: "string",
            description:
              "Filter by spent date. Examples: >=2024-01-01, ><2024-01-01|2024-12-31, t (today), lw (last week)",
          },
          from: {
            type: "string",
            description: "Filter entries from this date (YYYY-MM-DD)",
          },
          to: {
            type: "string",
            description: "Filter entries up to this date (YYYY-MM-DD)",
          },
        },
      },
    },
    {
      name: "get_time_entry",
      description: "Gets details of a single time entry by its numeric ID.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric time entry ID",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_time_entry",
      description:
        "Creates a new time entry. Requires either issue_id or project_id, and hours.",
      inputSchema: {
        type: "object",
        properties: {
          issue_id: {
            type: "number",
            description:
              "Issue ID to log time against. Either issue_id or project_id is required",
          },
          project_id: {
            type: ["string", "number"],
            description:
              "Project ID or identifier to log time against. Either issue_id or project_id is required",
          },
          hours: {
            type: "number",
            description: "Number of hours spent (required)",
          },
          activity_id: {
            type: "number",
            description: "Time activity ID (e.g., Development, Design)",
          },
          comments: {
            type: "string",
            description: "Description of the work done",
          },
          spent_on: {
            type: "string",
            description:
              "Date the time was spent (YYYY-MM-DD). Defaults to today",
          },
          user_id: {
            type: "number",
            description:
              "User ID to log time for (requires admin privileges). Defaults to current user",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values",
          },
        },
        required: ["hours"],
      },
    },
    {
      name: "update_time_entry",
      description: "Updates an existing time entry.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric time entry ID to update (required)",
          },
          issue_id: {
            type: "number",
            description: "Issue ID to reassign time to",
          },
          project_id: {
            type: ["string", "number"],
            description: "Project ID or identifier to reassign time to",
          },
          hours: {
            type: "number",
            description: "Number of hours spent",
          },
          activity_id: {
            type: "number",
            description: "Time activity ID",
          },
          comments: {
            type: "string",
            description: "Description of the work done",
          },
          spent_on: {
            type: "string",
            description: "Date the time was spent (YYYY-MM-DD)",
          },
          user_id: {
            type: "number",
            description: "User ID (requires admin privileges)",
          },
          custom_fields: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                value: { type: ["string", "array"] },
              },
              required: ["id", "value"],
            },
            description: "Custom field values",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_time_entry",
      description: "Deletes a time entry permanently.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric time entry ID to delete",
          },
        },
        required: ["id"],
      },
    },
    // ── Group ───────────────────────────────────────────────────────────────
    {
      name: "list_groups",
      description: "Lists all groups in Redmine.",
      inputSchema: {
        type: "object",
        properties: {
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
        },
      },
    },
    {
      name: "get_group",
      description:
        "Gets details of a group by its numeric ID. Can include users and memberships.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric group ID",
          },
          include: {
            type: "array",
            items: { type: "string", enum: ["users", "memberships"] },
            description: "Include associated data: users, memberships",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_group",
      description: "Creates a new group in Redmine.",
      inputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Group name (required)",
          },
          user_ids: {
            type: "array",
            items: { type: "number" },
            description: "Array of user IDs to add to the group",
          },
        },
        required: ["name"],
      },
    },
    {
      name: "update_group",
      description: "Updates an existing group.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric group ID to update (required)",
          },
          name: {
            type: "string",
            description: "New group name",
          },
          user_ids: {
            type: "array",
            items: { type: "number" },
            description:
              "Array of user IDs. Replaces all current group members",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_group",
      description: "Deletes a group permanently.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric group ID to delete",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "add_user_to_group",
      description: "Adds a user to a group.",
      inputSchema: {
        type: "object",
        properties: {
          group_id: {
            type: "number",
            description: "Numeric group ID",
          },
          user_id: {
            type: "number",
            description: "Numeric user ID to add",
          },
        },
        required: ["group_id", "user_id"],
      },
    },
    {
      name: "remove_user_from_group",
      description: "Removes a user from a group.",
      inputSchema: {
        type: "object",
        properties: {
          group_id: {
            type: "number",
            description: "Numeric group ID",
          },
          user_id: {
            type: "number",
            description: "Numeric user ID to remove",
          },
        },
        required: ["group_id", "user_id"],
      },
    },
    // ── Membership ──────────────────────────────────────────────────────────
    {
      name: "list_project_memberships",
      description:
        "Lists all memberships (users/groups with roles) of a project.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description:
              "Project ID (numeric) or identifier (string). Required",
          },
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
        },
        required: ["project_id"],
      },
    },
    {
      name: "get_membership",
      description: "Gets details of a single project membership by its ID.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric membership ID",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_project_membership",
      description:
        "Adds a user or group to a project with the specified roles.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description:
              "Project ID (numeric) or identifier (string). Required",
          },
          user_id: {
            type: "number",
            description:
              "Numeric user ID to add. Provide either user_id or group_id",
          },
          group_id: {
            type: "number",
            description:
              "Numeric group ID to add. Provide either user_id or group_id",
          },
          role_ids: {
            type: "array",
            items: { type: "number" },
            description: "Array of role IDs to assign (required)",
          },
        },
        required: ["project_id", "role_ids"],
      },
    },
    {
      name: "update_membership",
      description: "Updates the roles of an existing project membership.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric membership ID to update (required)",
          },
          role_ids: {
            type: "array",
            items: { type: "number" },
            description: "New array of role IDs (required, replaces current)",
          },
        },
        required: ["id", "role_ids"],
      },
    },
    {
      name: "delete_membership",
      description: "Removes a membership (user/group) from a project.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric membership ID to delete",
          },
        },
        required: ["id"],
      },
    },
    // ── Version ───────────────────────────────────────────────────────────
    {
      name: "list_project_versions",
      description: "Lists all versions (milestones) of a project.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description:
              "Project ID (numeric) or identifier (string). Required",
          },
        },
        required: ["project_id"],
      },
    },
    {
      name: "get_version",
      description: "Gets details of a single version by its ID.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric version ID",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_version",
      description: "Creates a new version (milestone) in a project.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description:
              "Project ID (numeric) or identifier (string). Required",
          },
          name: {
            type: "string",
            description: "Version name (required)",
          },
          status: {
            type: "string",
            description:
              "Version status: open, locked, or closed (default: open)",
          },
          sharing: {
            type: "string",
            description:
              "Sharing scope: none, descendants, hierarchy, tree, or system (default: none)",
          },
          due_date: {
            type: "string",
            description: "Due date in YYYY-MM-DD format",
          },
          description: {
            type: "string",
            description: "Version description",
          },
          wiki_page_title: {
            type: "string",
            description: "Associated wiki page title",
          },
        },
        required: ["project_id", "name"],
      },
    },
    {
      name: "update_version",
      description: "Updates an existing version.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric version ID to update (required)",
          },
          name: {
            type: "string",
            description: "New version name",
          },
          status: {
            type: "string",
            description: "Version status: open, locked, or closed",
          },
          sharing: {
            type: "string",
            description:
              "Sharing scope: none, descendants, hierarchy, tree, or system",
          },
          due_date: {
            type: "string",
            description: "Due date in YYYY-MM-DD format",
          },
          description: {
            type: "string",
            description: "Version description",
          },
          wiki_page_title: {
            type: "string",
            description: "Associated wiki page title",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_version",
      description: "Deletes a version.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric version ID to delete",
          },
        },
        required: ["id"],
      },
    },
    // ── Issue Category ────────────────────────────────────────────────────
    {
      name: "list_issue_categories",
      description: "Lists all issue categories of a project.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description:
              "Project ID (numeric) or identifier (string). Required",
          },
        },
        required: ["project_id"],
      },
    },
    {
      name: "get_issue_category",
      description: "Gets details of a single issue category by its ID.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric issue category ID",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_issue_category",
      description: "Creates a new issue category in a project.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description:
              "Project ID (numeric) or identifier (string). Required",
          },
          name: {
            type: "string",
            description: "Category name (required)",
          },
          assigned_to_id: {
            type: "number",
            description:
              "Numeric user ID to auto-assign issues in this category",
          },
        },
        required: ["project_id", "name"],
      },
    },
    {
      name: "update_issue_category",
      description: "Updates an existing issue category.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric issue category ID to update (required)",
          },
          name: {
            type: "string",
            description: "New category name",
          },
          assigned_to_id: {
            type: "number",
            description:
              "Numeric user ID to auto-assign issues in this category",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_issue_category",
      description:
        "Deletes an issue category. Optionally reassigns its issues to another category.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric issue category ID to delete (required)",
          },
          reassign_to_id: {
            type: "number",
            description:
              "Numeric category ID to reassign issues to before deletion",
          },
        },
        required: ["id"],
      },
    },
    // ── Issue Relation ────────────────────────────────────────────────────
    {
      name: "list_issue_relations",
      description: "Lists all relations of an issue.",
      inputSchema: {
        type: "object",
        properties: {
          issue_id: {
            type: "number",
            description: "Numeric issue ID (required)",
          },
        },
        required: ["issue_id"],
      },
    },
    {
      name: "get_issue_relation",
      description: "Gets details of a single issue relation by its ID.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric relation ID",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_issue_relation",
      description: "Creates a relation between two issues.",
      inputSchema: {
        type: "object",
        properties: {
          issue_id: {
            type: "number",
            description: "Numeric source issue ID (required)",
          },
          issue_to_id: {
            type: "number",
            description: "Numeric target issue ID (required)",
          },
          relation_type: {
            type: "string",
            description:
              "Relation type: relates, duplicates, duplicated, blocks, blocked, precedes, follows, copied_to, copied_from (required)",
          },
          delay: {
            type: "number",
            description:
              "Delay in days (only for precedes/follows relation types)",
          },
        },
        required: ["issue_id", "issue_to_id", "relation_type"],
      },
    },
    {
      name: "delete_issue_relation",
      description: "Deletes an issue relation.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric relation ID to delete",
          },
        },
        required: ["id"],
      },
    },
    // ── Wiki ──────────────────────────────────────────────────────────────
    {
      name: "list_wiki_pages",
      description:
        "Lists all wiki pages (index) of a project. Returns titles, versions and dates.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
        },
        required: ["project_id"],
      },
    },
    {
      name: "get_wiki_page",
      description:
        "Gets the content of a wiki page by its title. Returns the page text in Textile/Markdown format.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          title: {
            type: "string",
            description: "Wiki page title (used as slug in the URL)",
          },
          include: {
            type: "array",
            items: { type: "string", enum: ["attachments"] },
            description: "Include additional data: attachments",
          },
        },
        required: ["project_id", "title"],
      },
    },
    {
      name: "get_wiki_page_version",
      description:
        "Gets a specific version of a wiki page. Useful for viewing page history.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          title: {
            type: "string",
            description: "Wiki page title",
          },
          version: {
            type: "number",
            description: "Version number of the wiki page",
          },
          include: {
            type: "array",
            items: { type: "string", enum: ["attachments"] },
            description: "Include additional data: attachments",
          },
        },
        required: ["project_id", "title", "version"],
      },
    },
    {
      name: "create_or_update_wiki_page",
      description:
        "Creates or updates a wiki page. Uses PUT (idempotent by title). If the page exists it updates it, otherwise creates it.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          title: {
            type: "string",
            description:
              "Wiki page title (used as slug). For new pages this becomes the page name",
          },
          text: {
            type: "string",
            description:
              "Page content in Textile format (Redmine default) or Markdown if configured",
          },
          comments: {
            type: "string",
            description: "Version comment describing the change",
          },
          parent_title: {
            type: "string",
            description: "Title of the parent wiki page (for hierarchy)",
          },
          version: {
            type: "number",
            description:
              "Current version number for optimistic locking. If provided and conflicts, update will fail",
          },
        },
        required: ["project_id", "title", "text"],
      },
    },
    {
      name: "delete_wiki_page",
      description: "Deletes a wiki page from a project.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          title: {
            type: "string",
            description: "Wiki page title to delete",
          },
        },
        required: ["project_id", "title"],
      },
    },
    // ── News ──────────────────────────────────────────────────────────────
    {
      name: "list_all_news",
      description:
        "Lists news from all projects. Returns news with pagination.",
      inputSchema: {
        type: "object",
        properties: {
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
        },
      },
    },
    {
      name: "list_project_news",
      description: "Lists news of a specific project with pagination.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
        },
        required: ["project_id"],
      },
    },
    {
      name: "get_news",
      description: "Gets details of a single news item by its ID.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric news ID",
          },
          include: {
            type: "array",
            items: { type: "string", enum: ["comments"] },
            description: "Include additional data: comments",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "create_news",
      description: "Creates a news item in a project.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          title: {
            type: "string",
            description: "News title (required)",
          },
          description: {
            type: "string",
            description: "News body/content (required)",
          },
          summary: {
            type: "string",
            description: "Short summary of the news",
          },
        },
        required: ["project_id", "title", "description"],
      },
    },
    {
      name: "update_news",
      description: "Updates an existing news item.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric news ID",
          },
          title: {
            type: "string",
            description: "Updated news title",
          },
          description: {
            type: "string",
            description: "Updated news body/content",
          },
          summary: {
            type: "string",
            description: "Updated summary",
          },
        },
        required: ["id"],
      },
    },
    // ── Attachment ───────────────────────────────────────────────────────────
    {
      name: "get_attachment",
      description:
        "Gets metadata of an attachment by its ID (filename, filesize, content_type, content_url, author, etc.).",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric attachment ID",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "update_attachment",
      description:
        "Updates metadata of an attachment (filename, description). Only available since Redmine 3.4.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric attachment ID",
          },
          filename: {
            type: "string",
            description: "New filename for the attachment",
          },
          description: {
            type: "string",
            description: "New description for the attachment",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_attachment",
      description: "Deletes an attachment by its ID.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric attachment ID",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "upload_file",
      description:
        "Uploads a binary file to Redmine and returns an upload token. IMPORTANT: Redmine requires the request to use Content-Type: application/octet-stream for all file uploads — always set content_type to 'application/octet-stream', regardless of the actual file type. Using any other MIME type (e.g. 'image/png', 'application/pdf') will cause Redmine to reject the upload with HTTP 406. The returned token must be passed in the 'uploads' field when creating or updating issues, wiki pages, etc.",
      inputSchema: {
        type: "object",
        properties: {
          filename: {
            type: "string",
            description:
              "Name for the uploaded file as it will appear in Redmine",
          },
          content_type: {
            type: "string",
            description:
              "MUST be 'application/octet-stream'. Redmine rejects uploads with any other Content-Type (HTTP 406). Do not use the actual MIME type of the file here.",
            default: "application/octet-stream",
          },
          file_path: {
            type: "string",
            description: "Absolute path to the local file to upload.",
          },
        },
        required: ["filename", "content_type", "file_path"],
      },
    },
    // ── File ────────────────────────────────────────────────────────────────
    {
      name: "list_project_files",
      description:
        "Lists all files attached to a project (available since Redmine 3.4).",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
        },
        required: ["project_id"],
      },
    },
    {
      name: "create_project_file",
      description:
        "Adds a previously uploaded file to a project. Requires a token obtained from upload_file.",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          token: {
            type: "string",
            description: "Upload token returned by upload_file",
          },
          filename: {
            type: "string",
            description: "Filename for the project file",
          },
          description: {
            type: "string",
            description: "Optional description for the file",
          },
          version_id: {
            type: "number",
            description:
              "Optional version ID to associate the file with a project version",
          },
        },
        required: ["project_id", "token", "filename"],
      },
    },
    // ── Search ──────────────────────────────────────────────────────────────
    {
      name: "search",
      description:
        "Performs a global search across all Redmine resources (issues, news, documents, changesets, wiki pages, messages, projects).",
      inputSchema: {
        type: "object",
        properties: {
          q: {
            type: "string",
            description: "Search query string (required)",
          },
          scope: {
            type: "string",
            description:
              "Search scope: 'all' (default), 'my_projects', 'subprojects'",
          },
          all_words: {
            type: "boolean",
            description:
              "If true, all words must match. If false, any word. Default true",
          },
          titles_only: {
            type: "boolean",
            description:
              "If true, search only in titles. If false, search in content too",
          },
          issues: {
            type: "boolean",
            description: "Include issues in search results (default true)",
          },
          news: {
            type: "boolean",
            description: "Include news in search results",
          },
          documents: {
            type: "boolean",
            description: "Include documents in search results",
          },
          changesets: {
            type: "boolean",
            description: "Include changesets in search results",
          },
          wiki_pages: {
            type: "boolean",
            description: "Include wiki pages in search results",
          },
          messages: {
            type: "boolean",
            description: "Include forum messages in search results",
          },
          projects: {
            type: "boolean",
            description: "Include projects in search results",
          },
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
        },
        required: ["q"],
      },
    },
    {
      name: "search_in_project",
      description:
        "Searches within a specific project's scope (issues, wiki pages, news, etc.).",
      inputSchema: {
        type: "object",
        properties: {
          project_id: {
            type: ["string", "number"],
            description: "Project ID (numeric) or identifier (string)",
          },
          q: {
            type: "string",
            description: "Search query string (required)",
          },
          scope: {
            type: "string",
            description:
              "Search scope: 'all' (default), 'my_projects', 'subprojects'",
          },
          all_words: {
            type: "boolean",
            description:
              "If true, all words must match. If false, any word. Default true",
          },
          titles_only: {
            type: "boolean",
            description:
              "If true, search only in titles. If false, search in content too",
          },
          issues: {
            type: "boolean",
            description: "Include issues in search results (default true)",
          },
          news: {
            type: "boolean",
            description: "Include news in search results",
          },
          documents: {
            type: "boolean",
            description: "Include documents in search results",
          },
          changesets: {
            type: "boolean",
            description: "Include changesets in search results",
          },
          wiki_pages: {
            type: "boolean",
            description: "Include wiki pages in search results",
          },
          messages: {
            type: "boolean",
            description: "Include forum messages in search results",
          },
          projects: {
            type: "boolean",
            description: "Include projects in search results",
          },
          offset: {
            type: "number",
            description: "Number of items to skip (default 0)",
          },
          limit: {
            type: "number",
            description: "Number of items per page (default 25, max 100)",
          },
        },
        required: ["project_id", "q"],
      },
    },
    // ── Enumeration ──────────────────────────────────────────────────────────
    {
      name: "list_issue_priorities",
      description: "Lists all issue priorities defined in Redmine.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    {
      name: "list_time_entry_activities",
      description: "Lists all time entry activities defined in Redmine.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    {
      name: "list_document_categories",
      description: "Lists all document categories defined in Redmine.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    // ── Tracker ──────────────────────────────────────────────────────────────
    {
      name: "list_trackers",
      description: "Lists all trackers available in Redmine.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    // ── Issue Status ─────────────────────────────────────────────────────────
    {
      name: "list_issue_statuses",
      description: "Lists all issue statuses defined in Redmine.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    // ── Custom Field ─────────────────────────────────────────────────────────
    {
      name: "list_custom_fields",
      description:
        "Lists all custom fields defined in Redmine. Requires administrator privileges.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    // ── Query ────────────────────────────────────────────────────────────────
    {
      name: "list_queries",
      description: "Lists all saved (public and private) queries in Redmine.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    // ── Role ─────────────────────────────────────────────────────────────────
    {
      name: "list_roles",
      description: "Lists all roles defined in Redmine.",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    {
      name: "get_role",
      description:
        "Gets details of a role by its ID, including its list of permissions.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric role ID",
          },
        },
        required: ["id"],
      },
    },
    // ── Journal ──────────────────────────────────────────────────────────────
    {
      name: "update_journal",
      description:
        "Updates the notes of an issue journal entry (comment). Requires the user to be the author or an admin.",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
            description: "Numeric journal ID",
          },
          notes: {
            type: "string",
            description: "New text for the journal note",
          },
        },
        required: ["id", "notes"],
      },
    },
  ] as Array<{
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
  }>,
};
