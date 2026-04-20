import { RedmineApiConfig } from "@/domain/config/redmineApiConfig";

// Controllers
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
import { AgileSprintController } from "@/infrastructure/controllers/agileSprintController";

// Use cases — Agile Sprint
import { ListAgileSprints } from "@/application/use-cases/agile-sprint/listAgileSprints";
import { GetAgileSprint } from "@/application/use-cases/agile-sprint/getAgileSprint";
import { CreateAgileSprint } from "@/application/use-cases/agile-sprint/createAgileSprint";
import { UpdateAgileSprint } from "@/application/use-cases/agile-sprint/updateAgileSprint";
import { DeleteAgileSprint } from "@/application/use-cases/agile-sprint/deleteAgileSprint";
import { GetIssueAgileData } from "@/application/use-cases/agile-sprint/getIssueAgileData";
import { AssignIssueToSprint } from "@/application/use-cases/agile-sprint/assignIssueToSprint";
import { ListIssuesBySprint } from "@/application/use-cases/agile-sprint/listIssuesBySprint";

// Use cases — Project
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { GetProject } from "@/application/use-cases/project/getProject";
import { CreateProject } from "@/application/use-cases/project/createProject";
import { UpdateProject } from "@/application/use-cases/project/updateProject";
import { DeleteProject } from "@/application/use-cases/project/deleteProject";
import { ArchiveProject } from "@/application/use-cases/project/archiveProject";
import { UnarchiveProject } from "@/application/use-cases/project/unarchiveProject";

// Use cases — Issue
import { ListIssues } from "@/application/use-cases/issue/listIssues";
import { GetIssue } from "@/application/use-cases/issue/getIssue";
import { CreateIssue } from "@/application/use-cases/issue/createIssue";
import { UpdateIssue } from "@/application/use-cases/issue/updateIssue";
import { DeleteIssue } from "@/application/use-cases/issue/deleteIssue";
import { AddWatcher } from "@/application/use-cases/issue/addWatcher";
import { RemoveWatcher } from "@/application/use-cases/issue/removeWatcher";

// Use cases — User
import { ListUsers } from "@/application/use-cases/user/listUsers";
import { GetUser } from "@/application/use-cases/user/getUser";
import { GetCurrentUser } from "@/application/use-cases/user/getCurrentUser";
import { CreateUser } from "@/application/use-cases/user/createUser";
import { UpdateUser } from "@/application/use-cases/user/updateUser";
import { DeleteUser } from "@/application/use-cases/user/deleteUser";
import { GetMyAccount } from "@/application/use-cases/user/getMyAccount";
import { UpdateMyAccount } from "@/application/use-cases/user/updateMyAccount";

// Use cases — Time Entry
import { ListTimeEntries } from "@/application/use-cases/time-entry/listTimeEntries";
import { GetTimeEntry } from "@/application/use-cases/time-entry/getTimeEntry";
import { CreateTimeEntry } from "@/application/use-cases/time-entry/createTimeEntry";
import { UpdateTimeEntry } from "@/application/use-cases/time-entry/updateTimeEntry";
import { DeleteTimeEntry } from "@/application/use-cases/time-entry/deleteTimeEntry";

// Use cases — Group
import { ListGroups } from "@/application/use-cases/group/listGroups";
import { GetGroup } from "@/application/use-cases/group/getGroup";
import { CreateGroup } from "@/application/use-cases/group/createGroup";
import { UpdateGroup } from "@/application/use-cases/group/updateGroup";
import { DeleteGroup } from "@/application/use-cases/group/deleteGroup";
import { AddUserToGroup } from "@/application/use-cases/group/addUserToGroup";
import { RemoveUserFromGroup } from "@/application/use-cases/group/removeUserFromGroup";

// Use cases — Membership
import { ListProjectMemberships } from "@/application/use-cases/membership/listProjectMemberships";
import { GetMembership } from "@/application/use-cases/membership/getMembership";
import { CreateProjectMembership } from "@/application/use-cases/membership/createProjectMembership";
import { UpdateMembership } from "@/application/use-cases/membership/updateMembership";
import { DeleteMembership } from "@/application/use-cases/membership/deleteMembership";

// Use cases — Version
import { ListProjectVersions } from "@/application/use-cases/version/listProjectVersions";
import { GetVersion } from "@/application/use-cases/version/getVersion";
import { CreateVersion } from "@/application/use-cases/version/createVersion";
import { UpdateVersion } from "@/application/use-cases/version/updateVersion";
import { DeleteVersion } from "@/application/use-cases/version/deleteVersion";

// Use cases — Issue Category
import { ListIssueCategories } from "@/application/use-cases/issue-category/listIssueCategories";
import { GetIssueCategory } from "@/application/use-cases/issue-category/getIssueCategory";
import { CreateIssueCategory } from "@/application/use-cases/issue-category/createIssueCategory";
import { UpdateIssueCategory } from "@/application/use-cases/issue-category/updateIssueCategory";
import { DeleteIssueCategory } from "@/application/use-cases/issue-category/deleteIssueCategory";

// Use cases — Issue Relation
import { ListIssueRelations } from "@/application/use-cases/issue-relation/listIssueRelations";
import { GetIssueRelation } from "@/application/use-cases/issue-relation/getIssueRelation";
import { CreateIssueRelation } from "@/application/use-cases/issue-relation/createIssueRelation";
import { DeleteIssueRelation } from "@/application/use-cases/issue-relation/deleteIssueRelation";

// Use cases — Wiki
import { ListWikiPages } from "@/application/use-cases/wiki/listWikiPages";
import { GetWikiPage } from "@/application/use-cases/wiki/getWikiPage";
import { GetWikiPageVersion } from "@/application/use-cases/wiki/getWikiPageVersion";
import { CreateOrUpdateWikiPage } from "@/application/use-cases/wiki/createOrUpdateWikiPage";
import { DeleteWikiPage } from "@/application/use-cases/wiki/deleteWikiPage";

// Use cases — News
import { ListAllNews } from "@/application/use-cases/news/listAllNews";
import { ListProjectNews } from "@/application/use-cases/news/listProjectNews";
import { GetNews } from "@/application/use-cases/news/getNews";
import { CreateNews } from "@/application/use-cases/news/createNews";
import { UpdateNews } from "@/application/use-cases/news/updateNews";

// Use cases — Attachment
import { GetAttachment } from "@/application/use-cases/attachment/getAttachment";
import { UpdateAttachment } from "@/application/use-cases/attachment/updateAttachment";
import { DeleteAttachment } from "@/application/use-cases/attachment/deleteAttachment";
import { UploadFile } from "@/application/use-cases/attachment/uploadFile";

// Use cases — File
import { ListProjectFiles } from "@/application/use-cases/file/listProjectFiles";
import { CreateProjectFile } from "@/application/use-cases/file/createProjectFile";

// Use cases — Search
import { Search } from "@/application/use-cases/search/search";
import { SearchInProject } from "@/application/use-cases/search/searchInProject";

// Use cases — Enumeration
import { ListIssuePriorities } from "@/application/use-cases/enumeration/listIssuePriorities";
import { ListTimeEntryActivities } from "@/application/use-cases/enumeration/listTimeEntryActivities";
import { ListDocumentCategories } from "@/application/use-cases/enumeration/listDocumentCategories";

// Use cases — Tracker
import { ListTrackers } from "@/application/use-cases/tracker/listTrackers";

// Use cases — Issue Status
import { ListIssueStatuses } from "@/application/use-cases/issue-status/listIssueStatuses";

// Use cases — Custom Field
import { ListCustomFields } from "@/application/use-cases/custom-field/listCustomFields";

// Use cases — Query
import { ListQueries } from "@/application/use-cases/query/listQueries";

// Use cases — Role
import { ListRoles } from "@/application/use-cases/role/listRoles";
import { GetRole } from "@/application/use-cases/role/getRole";

// Use cases — Journal
import { UpdateJournal } from "@/application/use-cases/journal/updateJournal";

export interface AppContainer {
  // Project
  listProjects: ListProjects;
  getProject: GetProject;
  createProject: CreateProject;
  updateProject: UpdateProject;
  deleteProject: DeleteProject;
  archiveProject: ArchiveProject;
  unarchiveProject: UnarchiveProject;
  // Issue
  listIssues: ListIssues;
  getIssue: GetIssue;
  createIssue: CreateIssue;
  updateIssue: UpdateIssue;
  deleteIssue: DeleteIssue;
  addWatcher: AddWatcher;
  removeWatcher: RemoveWatcher;
  // User
  listUsers: ListUsers;
  getUser: GetUser;
  getCurrentUser: GetCurrentUser;
  createUser: CreateUser;
  updateUser: UpdateUser;
  deleteUser: DeleteUser;
  getMyAccount: GetMyAccount;
  updateMyAccount: UpdateMyAccount;
  // Time Entry
  listTimeEntries: ListTimeEntries;
  getTimeEntry: GetTimeEntry;
  createTimeEntry: CreateTimeEntry;
  updateTimeEntry: UpdateTimeEntry;
  deleteTimeEntry: DeleteTimeEntry;
  // Group
  listGroups: ListGroups;
  getGroup: GetGroup;
  createGroup: CreateGroup;
  updateGroup: UpdateGroup;
  deleteGroup: DeleteGroup;
  addUserToGroup: AddUserToGroup;
  removeUserFromGroup: RemoveUserFromGroup;
  // Membership
  listProjectMemberships: ListProjectMemberships;
  getMembership: GetMembership;
  createProjectMembership: CreateProjectMembership;
  updateMembership: UpdateMembership;
  deleteMembership: DeleteMembership;
  // Version
  listProjectVersions: ListProjectVersions;
  getVersion: GetVersion;
  createVersion: CreateVersion;
  updateVersion: UpdateVersion;
  deleteVersion: DeleteVersion;
  // Issue Category
  listIssueCategories: ListIssueCategories;
  getIssueCategory: GetIssueCategory;
  createIssueCategory: CreateIssueCategory;
  updateIssueCategory: UpdateIssueCategory;
  deleteIssueCategory: DeleteIssueCategory;
  // Issue Relation
  listIssueRelations: ListIssueRelations;
  getIssueRelation: GetIssueRelation;
  createIssueRelation: CreateIssueRelation;
  deleteIssueRelation: DeleteIssueRelation;
  // Wiki
  listWikiPages: ListWikiPages;
  getWikiPage: GetWikiPage;
  getWikiPageVersion: GetWikiPageVersion;
  createOrUpdateWikiPage: CreateOrUpdateWikiPage;
  deleteWikiPage: DeleteWikiPage;
  // News
  listAllNews: ListAllNews;
  listProjectNews: ListProjectNews;
  getNews: GetNews;
  createNews: CreateNews;
  updateNews: UpdateNews;
  // Attachment
  getAttachment: GetAttachment;
  updateAttachment: UpdateAttachment;
  deleteAttachment: DeleteAttachment;
  uploadFile: UploadFile;
  // File
  listProjectFiles: ListProjectFiles;
  createProjectFile: CreateProjectFile;
  // Search
  search: Search;
  searchInProject: SearchInProject;
  // Enumeration
  listIssuePriorities: ListIssuePriorities;
  listTimeEntryActivities: ListTimeEntryActivities;
  listDocumentCategories: ListDocumentCategories;
  // Tracker
  listTrackers: ListTrackers;
  // Issue Status
  listIssueStatuses: ListIssueStatuses;
  // Custom Field
  listCustomFields: ListCustomFields;
  // Query
  listQueries: ListQueries;
  // Role
  listRoles: ListRoles;
  getRole: GetRole;
  // Journal
  updateJournal: UpdateJournal;
  // Agile Sprint
  listAgileSprints: ListAgileSprints;
  getAgileSprint: GetAgileSprint;
  createAgileSprint: CreateAgileSprint;
  updateAgileSprint: UpdateAgileSprint;
  deleteAgileSprint: DeleteAgileSprint;
  getIssueAgileData: GetIssueAgileData;
  assignIssueToSprint: AssignIssueToSprint;
  listIssuesBySprint: ListIssuesBySprint;
}

export function createContainer(config: RedmineApiConfig): AppContainer {
  // Controllers
  const projectCtrl = new ProjectController(config);
  const issueCtrl = new IssueController(config);
  const userCtrl = new UserController(config);
  const timeEntryCtrl = new TimeEntryController(config);
  const groupCtrl = new GroupController(config);
  const membershipCtrl = new MembershipController(config);
  const versionCtrl = new VersionController(config);
  const issueCategoryCtrl = new IssueCategoryController(config);
  const issueRelationCtrl = new IssueRelationController(config);
  const wikiCtrl = new WikiController(config);
  const newsCtrl = new NewsController(config);
  const attachmentCtrl = new AttachmentController(config);
  const fileCtrl = new FileController(config);
  const searchCtrl = new SearchController(config);
  const enumerationCtrl = new EnumerationController(config);
  const trackerCtrl = new TrackerController(config);
  const issueStatusCtrl = new IssueStatusController(config);
  const customFieldCtrl = new CustomFieldController(config);
  const queryCtrl = new QueryController(config);
  const roleCtrl = new RoleController(config);
  const journalCtrl = new JournalController(config);
  const agileSprintCtrl = new AgileSprintController(config);

  return {
    // Project
    listProjects: new ListProjects(projectCtrl),
    getProject: new GetProject(projectCtrl),
    createProject: new CreateProject(projectCtrl),
    updateProject: new UpdateProject(projectCtrl),
    deleteProject: new DeleteProject(projectCtrl),
    archiveProject: new ArchiveProject(projectCtrl),
    unarchiveProject: new UnarchiveProject(projectCtrl),
    // Issue
    listIssues: new ListIssues(issueCtrl),
    getIssue: new GetIssue(issueCtrl),
    createIssue: new CreateIssue(issueCtrl),
    updateIssue: new UpdateIssue(issueCtrl),
    deleteIssue: new DeleteIssue(issueCtrl),
    addWatcher: new AddWatcher(issueCtrl),
    removeWatcher: new RemoveWatcher(issueCtrl),
    // User
    listUsers: new ListUsers(userCtrl),
    getUser: new GetUser(userCtrl),
    getCurrentUser: new GetCurrentUser(userCtrl),
    createUser: new CreateUser(userCtrl),
    updateUser: new UpdateUser(userCtrl),
    deleteUser: new DeleteUser(userCtrl),
    getMyAccount: new GetMyAccount(userCtrl),
    updateMyAccount: new UpdateMyAccount(userCtrl),
    // Time Entry
    listTimeEntries: new ListTimeEntries(timeEntryCtrl),
    getTimeEntry: new GetTimeEntry(timeEntryCtrl),
    createTimeEntry: new CreateTimeEntry(timeEntryCtrl),
    updateTimeEntry: new UpdateTimeEntry(timeEntryCtrl),
    deleteTimeEntry: new DeleteTimeEntry(timeEntryCtrl),
    // Group
    listGroups: new ListGroups(groupCtrl),
    getGroup: new GetGroup(groupCtrl),
    createGroup: new CreateGroup(groupCtrl),
    updateGroup: new UpdateGroup(groupCtrl),
    deleteGroup: new DeleteGroup(groupCtrl),
    addUserToGroup: new AddUserToGroup(groupCtrl),
    removeUserFromGroup: new RemoveUserFromGroup(groupCtrl),
    // Membership
    listProjectMemberships: new ListProjectMemberships(membershipCtrl),
    getMembership: new GetMembership(membershipCtrl),
    createProjectMembership: new CreateProjectMembership(membershipCtrl),
    updateMembership: new UpdateMembership(membershipCtrl),
    deleteMembership: new DeleteMembership(membershipCtrl),
    // Version
    listProjectVersions: new ListProjectVersions(versionCtrl),
    getVersion: new GetVersion(versionCtrl),
    createVersion: new CreateVersion(versionCtrl),
    updateVersion: new UpdateVersion(versionCtrl),
    deleteVersion: new DeleteVersion(versionCtrl),
    // Issue Category
    listIssueCategories: new ListIssueCategories(issueCategoryCtrl),
    getIssueCategory: new GetIssueCategory(issueCategoryCtrl),
    createIssueCategory: new CreateIssueCategory(issueCategoryCtrl),
    updateIssueCategory: new UpdateIssueCategory(issueCategoryCtrl),
    deleteIssueCategory: new DeleteIssueCategory(issueCategoryCtrl),
    // Issue Relation
    listIssueRelations: new ListIssueRelations(issueRelationCtrl),
    getIssueRelation: new GetIssueRelation(issueRelationCtrl),
    createIssueRelation: new CreateIssueRelation(issueRelationCtrl),
    deleteIssueRelation: new DeleteIssueRelation(issueRelationCtrl),
    // Wiki
    listWikiPages: new ListWikiPages(wikiCtrl),
    getWikiPage: new GetWikiPage(wikiCtrl),
    getWikiPageVersion: new GetWikiPageVersion(wikiCtrl),
    createOrUpdateWikiPage: new CreateOrUpdateWikiPage(wikiCtrl),
    deleteWikiPage: new DeleteWikiPage(wikiCtrl),
    // News
    listAllNews: new ListAllNews(newsCtrl),
    listProjectNews: new ListProjectNews(newsCtrl),
    getNews: new GetNews(newsCtrl),
    createNews: new CreateNews(newsCtrl),
    updateNews: new UpdateNews(newsCtrl),
    // Attachment
    getAttachment: new GetAttachment(attachmentCtrl),
    updateAttachment: new UpdateAttachment(attachmentCtrl),
    deleteAttachment: new DeleteAttachment(attachmentCtrl),
    uploadFile: new UploadFile(attachmentCtrl),
    // File
    listProjectFiles: new ListProjectFiles(fileCtrl),
    createProjectFile: new CreateProjectFile(fileCtrl),
    // Search
    search: new Search(searchCtrl),
    searchInProject: new SearchInProject(searchCtrl),
    // Enumeration
    listIssuePriorities: new ListIssuePriorities(enumerationCtrl),
    listTimeEntryActivities: new ListTimeEntryActivities(enumerationCtrl),
    listDocumentCategories: new ListDocumentCategories(enumerationCtrl),
    // Tracker
    listTrackers: new ListTrackers(trackerCtrl),
    // Issue Status
    listIssueStatuses: new ListIssueStatuses(issueStatusCtrl),
    // Custom Field
    listCustomFields: new ListCustomFields(customFieldCtrl),
    // Query
    listQueries: new ListQueries(queryCtrl),
    // Role
    listRoles: new ListRoles(roleCtrl),
    getRole: new GetRole(roleCtrl),
    // Journal
    updateJournal: new UpdateJournal(journalCtrl),
    // Agile Sprint
    listAgileSprints: new ListAgileSprints(agileSprintCtrl),
    getAgileSprint: new GetAgileSprint(agileSprintCtrl),
    createAgileSprint: new CreateAgileSprint(agileSprintCtrl),
    updateAgileSprint: new UpdateAgileSprint(agileSprintCtrl),
    deleteAgileSprint: new DeleteAgileSprint(agileSprintCtrl),
    getIssueAgileData: new GetIssueAgileData(agileSprintCtrl),
    assignIssueToSprint: new AssignIssueToSprint(agileSprintCtrl),
    listIssuesBySprint: new ListIssuesBySprint(agileSprintCtrl),
  };
}
