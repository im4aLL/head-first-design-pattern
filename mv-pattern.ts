// deno-mvc.ts
import {
  Application,
  Router,
  Context,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";

/** --- Model: Data layer --- */
class UserModel {
  private users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  findById(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }

  findAll() {
    return this.users;
  }
}

/** --- View: Presentation layer --- */
class JsonView {
  render(ctx: Context, data: any, status = 200) {
    ctx.response.status = status;
    ctx.response.body = data;
  }
}

/** --- Controller: Handles requests --- */
class UserController {
  private model = new UserModel();
  private view = new JsonView();

  getAllUsers(ctx: Context) {
    const users = this.model.findAll();
    this.view.render(ctx, users);
  }

  getUserById(ctx: Context) {
    const idParam = ctx.params.id;
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      return this.view.render(ctx, { error: "User ID is required" }, 400);
    }

    const user = this.model.findById(id);

    if (!user) {
      return this.view.render(ctx, { error: "User not found" }, 404);
    }

    this.view.render(ctx, user);
  }
}

/** --- Server Setup --- */
const app = new Application();
const router = new Router();
const userController = new UserController();

router.get("/users", (ctx) => userController.getAllUsers(ctx));
router.get("/user/:id", (ctx) => userController.getUserById(ctx));

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running at http://localhost:8000");
await app.listen({ port: 8000 });
