function canAccess(user: any): boolean {
  // Hardcoded rules
  if (user.role === "admin") return true;
  if (user.role === "member" && user.age > 18) return true;
  return false;
}

const users = [
  { role: "admin", age: 16 },
  { role: "member", age: 20 },
  { role: "guest", age: 25 },
];

users.forEach((user) => {
  console.log(`${user.role} access: ${canAccess(user)}`);
});

/*
Logic is hardcoded, not flexible.
Adding new rules requires modifying the function.
Complex expressions become messy and unreadable.
*/
