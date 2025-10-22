// adr-deno.ts
import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

/** --- Domain: business logic --- */
class GetUserProfileDomain {
  private users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  getUserById(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }
}

/** --- Responder: builds response --- */
class JsonResponder {
  send(data: any, statusCode = 200) {
    return new Response(JSON.stringify(data), {
      status: statusCode,
      headers: { "Content-Type": "application/json" },
    });
  }
}

/** --- Action: handles request --- */
class GetUserProfileAction {
  private domain = new GetUserProfileDomain();
  private responder = new JsonResponder();

  handle(url: URL) {
    const idParam = url.searchParams.get("id");
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      return this.responder.send({ error: "User ID is required" }, 400);
    }

    const user = this.domain.getUserById(id);

    if (!user) {
      return this.responder.send({ error: "User not found" }, 404);
    }

    return this.responder.send(user);
  }
}

/** --- Server --- */
const action = new GetUserProfileAction();

console.log("Server running at http://localhost:8000");
serve(
  (req) => {
    const url = new URL(req.url, `http://${req.headers.get("host")}`);

    if (url.pathname === "/user/profile") {
      return action.handle(url);
    }

    return new Response(JSON.stringify({ error: "Not Found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  },
  { port: 8000 },
);

// deno run --allow-net adr-pattern.ts
