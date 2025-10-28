/*
You want to build different kinds of HTTP requests (GET, POST, with headers, JSON body, etc.).
If you try to handle all parameters directly, your code quickly becomes messy and hard to maintain.
*/

function sendRequest(
  url: string,
  method: string,
  headers?: Record<string, string>,
  body?: any,
  timeout?: number,
) {
  console.log({ url, method, headers, body, timeout });
}

// Using it:
sendRequest("https://api.example.com/users", "GET");

sendRequest(
  "https://api.example.com/users",
  "POST",
  { "Content-Type": "application/json" },
  JSON.stringify({ name: "John" }),
  5000,
);

/*
Too many parameters, hard to remember their order.
Not all parameters are always needed.
Reusing similar configurations (like default headers or timeouts) is painful.
*/
