class HttpRequest {
  url!: string;
  method!: string;
  headers: Record<string, string> = {};
  body?: any;
  timeout?: number;

  send() {
    console.log("Sending request:", this);
    // Here we could actually call fetch or axios
  }
}

// Builder
class HttpRequestBuilder {
  private request: HttpRequest;

  constructor() {
    this.request = new HttpRequest();
  }

  setUrl(url: string): this {
    this.request.url = url;
    return this;
  }

  setMethod(method: string): this {
    this.request.method = method;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.request.headers[key] = value;
    return this;
  }

  setJsonBody(data: object): this {
    this.request.body = JSON.stringify(data);
    this.request.headers["Content-Type"] = "application/json";
    return this;
  }

  setTimeout(ms: number): this {
    this.request.timeout = ms;
    return this;
  }

  build(): HttpRequest {
    return this.request;
  }
}

// Usage

// Example 1: Simple GET request
const getRequest = new HttpRequestBuilder()
  .setUrl("https://api.example.com/users")
  .setMethod("GET")
  .build();

getRequest.send();

// Example 2: POST request with JSON
const postRequest = new HttpRequestBuilder()
  .setUrl("https://api.example.com/users")
  .setMethod("POST")
  .setJsonBody({ name: "Alice", age: 30 })
  .setTimeout(5000)
  .build();

postRequest.send();

// Example 3: Reusable builder for authenticated requests
const authRequest = new HttpRequestBuilder()
  .addHeader("Authorization", "Bearer 123456")
  .setUrl("https://api.example.com/profile")
  .setMethod("GET")
  .build();

authRequest.send();
