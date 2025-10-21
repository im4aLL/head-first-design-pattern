class RealAPI {
  getUser(userId: number) {
    console.log(`Fetching user ${userId} from remote API...`);
    return { id: userId, name: `User${userId}` };
  }
}

const api = new RealAPI();
console.log(api.getUser(1)); // Fetches from API
console.log(api.getUser(1)); // Fetches from API again ❌

/*
Every request fetches data from the API, even if it's already fetched.
Wastes network bandwidth and slows down the app.
No caching mechanism.
*/
