import { RedmineApiConfig } from "@/domain/config/redmineApiConfig";
import { ProjectController } from "@/infrastructure/controllers/projectController";
import { IssueController } from "@/infrastructure/controllers/issueController";
import { UserController } from "@/infrastructure/controllers/userController";
import { TimeEntryController } from "@/infrastructure/controllers/timeEntryController";
import { GroupController } from "@/infrastructure/controllers/groupController";
import { MembershipController } from "@/infrastructure/controllers/membershipController";
import { VersionController } from "@/infrastructure/controllers/versionController";
import { IssueCategoryController } from "@/infrastructure/controllers/issueCategoryController";
import { IssueRelationController } from "@/infrastructure/controllers/issueRelationController";
import { WikiController } from "@/infrastructure/controllers/wikiController";
import { NewsController } from "@/infrastructure/controllers/newsController";
import { AttachmentController } from "@/infrastructure/controllers/attachmentController";
import { FileController } from "@/infrastructure/controllers/fileController";
import { SearchController } from "@/infrastructure/controllers/searchController";
import { EnumerationController } from "@/infrastructure/controllers/enumerationController";
import { TrackerController } from "@/infrastructure/controllers/trackerController";
import { IssueStatusController } from "@/infrastructure/controllers/issueStatusController";
import { CustomFieldController } from "@/infrastructure/controllers/customFieldController";
import { QueryController } from "@/infrastructure/controllers/queryController";
import { RoleController } from "@/infrastructure/controllers/roleController";
import { JournalController } from "@/infrastructure/controllers/journalController";

export const config: RedmineApiConfig = {
  apiKey: "",
  baseUrl: "",
};

export const projectCtrl = new ProjectController(config);
export const issueCtrl = new IssueController(config);
export const userCtrl = new UserController(config);
export const timeEntryCtrl = new TimeEntryController(config);
export const groupCtrl = new GroupController(config);
export const membershipCtrl = new MembershipController(config);
export const versionCtrl = new VersionController(config);
export const issueCategoryCtrl = new IssueCategoryController(config);
export const issueRelationCtrl = new IssueRelationController(config);
export const wikiCtrl = new WikiController(config);
export const newsCtrl = new NewsController(config);
export const attachmentCtrl = new AttachmentController(config);
export const fileCtrl = new FileController(config);
export const searchCtrl = new SearchController(config);
export const enumerationCtrl = new EnumerationController(config);
export const trackerCtrl = new TrackerController(config);
export const issueStatusCtrl = new IssueStatusController(config);
export const customFieldCtrl = new CustomFieldController(config);
export const queryCtrl = new QueryController(config);
export const roleCtrl = new RoleController(config);
export const journalCtrl = new JournalController(config);
