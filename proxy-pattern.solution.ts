interface API {
  getUser(userId: number): { id: number; name: string };
}

// Existing API implementation
class RealAPI implements API {
  getUser(userId: number) {
    console.log(`Fetching user ${userId} from remote API...`);
    return { id: userId, name: `User${userId}` };
  }
}

// Proxy pattern which caches user data
class APIProxy implements API {
  private realAPI = new RealAPI();
  private cache: { [key: number]: { id: number; name: string } } = {};

  getUser(userId: number) {
    if (!this.cache[userId]) {
      console.log("Cache miss. Fetching from API...");
      this.cache[userId] = this.realAPI.getUser(userId);
    } else {
      console.log("Cache hit. Returning cached data...");
    }

    return this.cache[userId];
  }
}

// Usage
const api = new APIProxy();

console.log(api.getUser(1)); // Cache miss → fetches from API
console.log(api.getUser(1)); // Cache hit → returns cached data
console.log(api.getUser(2)); // Cache miss → fetches from API
console.log(api.getUser(2)); // Cache hit → returns cached data
