// adr-oak.ts
import {
  Application,
  Router,
  Context,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";

/** --- Domain: business logic --- */
class GetUserProfileDomain {
  private users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  getUserById(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }

  getAllUsers() {
    return this.users;
  }
}

/** --- Responder: builds response --- */
class JsonResponder {
  send(ctx: Context, data: any, status = 200) {
    ctx.response.status = status;
    ctx.response.body = data;
  }
}

/** --- Actions --- */
class GetUserProfileAction {
  private domain = new GetUserProfileDomain();
  private responder = new JsonResponder();

  getAll(ctx: Context) {
    const users = this.domain.getAllUsers();
    this.responder.send(ctx, users);
  }

  getById(ctx: Context) {
    const id = Number(ctx.params.id);
    if (isNaN(id)) {
      this.responder.send(ctx, { error: "Invalid user ID" }, 400);
      return;
    }

    const user = this.domain.getUserById(id);
    if (!user) {
      this.responder.send(ctx, { error: "User not found" }, 404);
      return;
    }

    this.responder.send(ctx, user);
  }
}

/** --- Router setup --- */
const router = new Router();
const action = new GetUserProfileAction();

router
  .get("/users", (ctx) => action.getAll(ctx))
  .get("/users/:id", (ctx) => action.getById(ctx));

/** --- Application --- */
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running at http://localhost:8000");
await app.listen({ port: 8000 });
