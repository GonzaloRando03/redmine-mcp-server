import { describe, it, expect, beforeAll } from "vitest";
import { timeEntryCtrl, projectCtrl } from "./setup";
import { ListProjects } from "@/application/use-cases/project/listProjects";
import { ListTimeEntries } from "@/application/use-cases/time-entry/listTimeEntries";
import { GetTimeEntry } from "@/application/use-cases/time-entry/getTimeEntry";
import { CreateTimeEntry } from "@/application/use-cases/time-entry/createTimeEntry";
import { UpdateTimeEntry } from "@/application/use-cases/time-entry/updateTimeEntry";
import { DeleteTimeEntry } from "@/application/use-cases/time-entry/deleteTimeEntry";

const listProjects = new ListProjects(projectCtrl);
const listTimeEntries = new ListTimeEntries(timeEntryCtrl);
const getTimeEntry = new GetTimeEntry(timeEntryCtrl);
const createTimeEntry = new CreateTimeEntry(timeEntryCtrl);
const updateTimeEntry = new UpdateTimeEntry(timeEntryCtrl);
const deleteTimeEntry = new DeleteTimeEntry(timeEntryCtrl);

describe("Time Entry", () => {
  let projectId: number;
  let entries: Awaited<
    ReturnType<typeof listTimeEntries.handle>
  >["time_entries"];

  beforeAll(async () => {
    const projectResult = await listProjects.handle({ offset: 0, limit: 1 });
    if (projectResult.projects.length === 0)
      throw new Error("No hay proyectos disponibles");
    projectId = projectResult.projects[0].id;

    const result = await listTimeEntries.handle({
      project_id: projectId,
      limit: 5,
    });
    entries = result.time_entries;
  });

  it("listTimeEntries devuelve lista con paginación", async () => {
    const result = await listTimeEntries.handle({ limit: 5 });
    expect(result).toHaveProperty("time_entries");
    expect(Array.isArray(result.time_entries)).toBe(true);
    expect(result).toHaveProperty("total_count");
    expect(result).toHaveProperty("offset");
    expect(result).toHaveProperty("limit");
  });

  it("listTimeEntries filtra por project_id", async () => {
    const result = await listTimeEntries.handle({
      project_id: projectId,
      limit: 5,
    });
    expect(result).toHaveProperty("time_entries");
    for (const entry of result.time_entries) {
      expect(entry.project.id).toBe(projectId);
    }
  });

  it("cada time entry tiene id, project, user, activity, hours, spent_on", () => {
    for (const entry of entries) {
      expect(entry).toHaveProperty("id");
      expect(entry).toHaveProperty("project");
      expect(entry).toHaveProperty("user");
      expect(entry).toHaveProperty("activity");
      expect(entry).toHaveProperty("hours");
      expect(entry).toHaveProperty("spent_on");
    }
  });

  it("getTimeEntry devuelve una entrada por ID", async () => {
    if (entries.length === 0) return;
    const entry = await getTimeEntry.handle({ id: entries[0].id });
    expect(entry).toHaveProperty("id", entries[0].id);
    expect(entry).toHaveProperty("hours");
    expect(entry).toHaveProperty("project");
  });

  it("createTimeEntry crea una entrada y deleteTimeEntry la elimina", async () => {
    const created = await createTimeEntry.handle({
      project_id: projectId,
      hours: 1.5,
      comments: "Test time entry from vitest",
    });
    expect(created).toHaveProperty("id");
    expect(created.hours).toBe(1.5);
    expect(created.comments).toBe("Test time entry from vitest");

    await deleteTimeEntry.handle({ id: created.id });
  });

  it("updateTimeEntry actualiza una entrada existente", async () => {
    const created = await createTimeEntry.handle({
      project_id: projectId,
      hours: 2,
      comments: "Before update",
    });

    await updateTimeEntry.handle({
      id: created.id,
      hours: 3,
      comments: "After update",
    });

    const updated = await getTimeEntry.handle({ id: created.id });
    expect(updated.hours).toBe(3);
    expect(updated.comments).toBe("After update");

    await deleteTimeEntry.handle({ id: created.id });
  });
});
