import { IssueService } from "@/application/services/issueService";
import { CreateIssueParams } from "@/domain/issue/createIssueParams";
import { GetIssueParams } from "@/domain/issue/getIssueParams";
import { ListIssuesParams } from "@/domain/issue/listIssuesParams";
import { ListIssuesResult } from "@/domain/issue/listIssuesResult";
import { RedmineIssue } from "@/domain/issue/redmineIssue";
import { UpdateIssueParams } from "@/domain/issue/updateIssueParams";
import { WatcherParams } from "@/domain/issue/watcherParams";
import { RedmineApiBaseController } from "@/infrastructure/controllers/redmineApiBaseController";

export class IssueController
  extends RedmineApiBaseController
  implements IssueService
{
  async listIssues(params: ListIssuesParams): Promise<ListIssuesResult> {
    return this.request<ListIssuesResult>(
      "GET",
      "/issues.json",
      params as Record<string, unknown>,
      "List issues",
    );
  }

  async getIssue(params: GetIssueParams): Promise<RedmineIssue> {
    const { id, ...query } = params;
    const raw = await this.request<{ issue: RedmineIssue }>(
      "GET",
      `/issues/${encodeURIComponent(id)}.json`,
      query as Record<string, unknown>,
      "Get issue",
    );
    return raw.issue;
  }

  async createIssue(params: CreateIssueParams): Promise<RedmineIssue> {
    const raw = await this.request<{ issue: RedmineIssue }>(
      "POST",
      "/issues.json",
      { issue: params },
      "Create issue",
    );
    return raw.issue;
  }

  async updateIssue(params: UpdateIssueParams): Promise<void> {
    const { id, ...fields } = params;
    await this.request(
      "PUT",
      `/issues/${encodeURIComponent(id)}.json`,
      { issue: fields },
      "Update issue",
    );
  }

  async deleteIssue(params: { id: number }): Promise<void> {
    await this.request(
      "DELETE",
      `/issues/${encodeURIComponent(params.id)}.json`,
      undefined,
      "Delete issue",
    );
  }

  async addWatcher(params: WatcherParams): Promise<void> {
    await this.request(
      "POST",
      `/issues/${encodeURIComponent(params.issue_id)}/watchers.json`,
      { user_id: params.user_id },
      "Add watcher",
    );
  }

  async removeWatcher(params: WatcherParams): Promise<void> {
    await this.request(
      "DELETE",
      `/issues/${encodeURIComponent(params.issue_id)}/watchers/${encodeURIComponent(params.user_id)}.json`,
      undefined,
      "Remove watcher",
    );
  }
}
