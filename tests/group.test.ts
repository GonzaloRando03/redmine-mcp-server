import { describe, it, expect, beforeAll } from "vitest";
import { groupCtrl } from "./setup";
import { ListGroups } from "@/application/use-cases/group/listGroups";
import { GetGroup } from "@/application/use-cases/group/getGroup";
import { CreateGroup } from "@/application/use-cases/group/createGroup";
import { UpdateGroup } from "@/application/use-cases/group/updateGroup";
import { DeleteGroup } from "@/application/use-cases/group/deleteGroup";
import { AddUserToGroup } from "@/application/use-cases/group/addUserToGroup";
import { RemoveUserFromGroup } from "@/application/use-cases/group/removeUserFromGroup";

const listGroups = new ListGroups(groupCtrl);
const getGroup = new GetGroup(groupCtrl);
const createGroup = new CreateGroup(groupCtrl);
const updateGroup = new UpdateGroup(groupCtrl);
const deleteGroup = new DeleteGroup(groupCtrl);
const addUserToGroup = new AddUserToGroup(groupCtrl);
const removeUserFromGroup = new RemoveUserFromGroup(groupCtrl);

describe("Group", () => {
  let groups: Awaited<ReturnType<typeof listGroups.handle>>["groups"];

  beforeAll(async () => {
    const result = await listGroups.handle({ limit: 25 });
    groups = result.groups;
  });

  it("listGroups devuelve lista con paginación", async () => {
    const result = await listGroups.handle({ limit: 25 });
    expect(result).toHaveProperty("groups");
    expect(Array.isArray(result.groups)).toBe(true);
    expect(result).toHaveProperty("total_count");
    expect(result).toHaveProperty("offset");
    expect(result).toHaveProperty("limit");
  });

  it("cada grupo tiene id y name", () => {
    for (const group of groups) {
      expect(group).toHaveProperty("id");
      expect(group).toHaveProperty("name");
    }
  });

  it("getGroup devuelve un grupo por ID con includes", async () => {
    if (groups.length === 0) return;
    const group = await getGroup.handle({
      id: groups[0].id,
      include: ["users", "memberships"],
    });
    expect(group).toHaveProperty("id", groups[0].id);
    expect(group).toHaveProperty("name");
  });

  it("createGroup crea un grupo y deleteGroup lo elimina", async () => {
    const created = await createGroup.handle({
      name: "Test Group from vitest",
    });
    expect(created).toHaveProperty("id");
    expect(created.name).toBe("Test Group from vitest");

    await deleteGroup.handle({ id: created.id });
  });

  it("updateGroup actualiza el nombre de un grupo", async () => {
    const created = await createGroup.handle({
      name: "Before update group",
    });

    await updateGroup.handle({
      id: created.id,
      name: "After update group",
    });

    const updated = await getGroup.handle({ id: created.id });
    expect(updated.name).toBe("After update group");

    await deleteGroup.handle({ id: created.id });
  });

  it("addUserToGroup añade un usuario y removeUserFromGroup lo quita", async () => {
    const created = await createGroup.handle({
      name: "Group user test",
    });

    // Necesitamos un user_id existente; usamos el ID 1 (admin típico)
    // Si falla, el test se salta
    try {
      await addUserToGroup.handle({
        group_id: created.id,
        user_id: 1,
      });

      const withUsers = await getGroup.handle({
        id: created.id,
        include: ["users"],
      });
      const userIds = (withUsers.users ?? []).map((u) => u.id);
      expect(userIds).toContain(1);

      await removeUserFromGroup.handle({
        group_id: created.id,
        user_id: 1,
      });
    } finally {
      await deleteGroup.handle({ id: created.id });
    }
  });

  it("createGroup con user_ids crea grupo con usuarios", async () => {
    const created = await createGroup.handle({
      name: "Group with users",
      user_ids: [1],
    });
    expect(created).toHaveProperty("id");

    const detail = await getGroup.handle({
      id: created.id,
      include: ["users"],
    });
    const userIds = (detail.users ?? []).map((u) => u.id);
    expect(userIds).toContain(1);

    await deleteGroup.handle({ id: created.id });
  });
});
