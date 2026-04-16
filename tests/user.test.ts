import { describe, it, expect, beforeAll } from "vitest";
import { userCtrl } from "./setup";
import { ListUsers } from "@/application/use-cases/user/listUsers";
import { GetUser } from "@/application/use-cases/user/getUser";
import { GetCurrentUser } from "@/application/use-cases/user/getCurrentUser";
import { CreateUser } from "@/application/use-cases/user/createUser";
import { UpdateUser } from "@/application/use-cases/user/updateUser";
import { DeleteUser } from "@/application/use-cases/user/deleteUser";
import { GetMyAccount } from "@/application/use-cases/user/getMyAccount";
import { UpdateMyAccount } from "@/application/use-cases/user/updateMyAccount";

const listUsers = new ListUsers(userCtrl);
const getUser = new GetUser(userCtrl);
const getCurrentUser = new GetCurrentUser(userCtrl);
const createUser = new CreateUser(userCtrl);
const updateUser = new UpdateUser(userCtrl);
const deleteUser = new DeleteUser(userCtrl);
const getMyAccount = new GetMyAccount(userCtrl);
const updateMyAccount = new UpdateMyAccount(userCtrl);

describe("User", () => {
  let users: Awaited<ReturnType<typeof listUsers.handle>>["users"];

  beforeAll(async () => {
    const result = await listUsers.handle({ offset: 0, limit: 5 });
    users = result.users;
  });

  it("listUsers devuelve la lista de usuarios", async () => {
    const result = await listUsers.handle({ offset: 0, limit: 5 });
    expect(result).toHaveProperty("users");
    expect(Array.isArray(result.users)).toBe(true);
    expect(result).toHaveProperty("total_count");
    expect(result).toHaveProperty("offset");
    expect(result).toHaveProperty("limit");
  });

  it("cada usuario tiene id, login, firstname, lastname", () => {
    for (const user of users) {
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("login");
      expect(user).toHaveProperty("firstname");
      expect(user).toHaveProperty("lastname");
    }
  });

  it("listUsers filtra por status activo", async () => {
    const result = await listUsers.handle({ status: "1", limit: 5 });
    expect(result).toHaveProperty("users");
    expect(Array.isArray(result.users)).toBe(true);
  });

  it("getUser devuelve un usuario por ID", async () => {
    if (users.length === 0) return;
    const user = await getUser.handle({ id: users[0].id });
    expect(user).toHaveProperty("id", users[0].id);
    expect(user).toHaveProperty("login");
    expect(user).toHaveProperty("firstname");
    expect(user).toHaveProperty("lastname");
  });

  it("getUser con include devuelve datos adicionales", async () => {
    if (users.length === 0) return;
    const user = await getUser.handle({
      id: users[0].id,
      include: "memberships,groups",
    });
    expect(user).toHaveProperty("memberships");
    expect(user).toHaveProperty("groups");
  });

  it("getCurrentUser devuelve el usuario autenticado", async () => {
    const user = await getCurrentUser.handle();
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("login");
    expect(user).toHaveProperty("firstname");
    expect(user).toHaveProperty("lastname");
    expect(user).toHaveProperty("mail");
  });

  it("getMyAccount devuelve los datos de mi cuenta", async () => {
    const user = await getMyAccount.handle(undefined as unknown as void);
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("login");
    expect(user).toHaveProperty("firstname");
    expect(user).toHaveProperty("lastname");
    expect(user).toHaveProperty("mail");
    expect(user).toHaveProperty("api_key");
  });
});
