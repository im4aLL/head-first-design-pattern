/** --- Expression Interface --- */
interface Expression {
  interpret(context: any): boolean;
}

/** --- Terminal Expressions --- */
class IsAdmin implements Expression {
  interpret(context: any): boolean {
    return context.role === "admin";
  }
}

class IsMember implements Expression {
  interpret(context: any): boolean {
    return context.role === "member";
  }
}

class AgeOver implements Expression {
  constructor(private ageLimit: number) {}
  interpret(context: any): boolean {
    return context.age > this.ageLimit;
  }
}

/** --- Non-Terminal Expressions --- */
class AndExpression implements Expression {
  constructor(
    private expr1: Expression,
    private expr2: Expression,
  ) {}
  interpret(context: any): boolean {
    return this.expr1.interpret(context) && this.expr2.interpret(context);
  }
}

class OrExpression implements Expression {
  constructor(
    private expr1: Expression,
    private expr2: Expression,
  ) {}
  interpret(context: any): boolean {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

/** --- Usage --- */
const accessRule = new OrExpression(
  new IsAdmin(),
  new AndExpression(new IsMember(), new AgeOver(18)),
);

const users = [
  { role: "admin", age: 16 },
  { role: "member", age: 20 },
  { role: "guest", age: 25 },
];

users.forEach((user) => {
  console.log(`${user.role} access: ${accessRule.interpret(user)}`);
});

/*
Why Interpreter Pattern Solves the Problem

Rules are flexible and extensible.
No more messy nested if-else statements.
Can combine expressions (AND, OR, NOT) easily.
Supports dynamic evaluation at runtime.
*/
