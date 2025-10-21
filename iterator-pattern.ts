/* You’re building a social media feed. Each user has a list of posts. */

const posts = [
  { id: 1, content: "Hello world!" },
  { id: 2, content: "Learning TypeScript" },
  { id: 3, content: "Design patterns are cool" },
];

// Client app
for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].content);
}

/*
Client code must know the internal structure (array).
Hard to change traversal strategy (e.g., reverse, filter, paginate).
Duplicated code if multiple collections exist.
*/
