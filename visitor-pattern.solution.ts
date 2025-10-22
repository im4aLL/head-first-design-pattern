// Idea is to move operations (like payroll, report generation) into
// Visitors instead of putting them in each employee class.

/** --- Visitor Interface --- */
interface EmployeeVisitor {
  visitFullTimeEmployee(emp: FullTimeEmployee): void;
  visitContractor(emp: Contractor): void;
}

/** --- Element Interface --- */
interface Employee {
  accept(visitor: EmployeeVisitor): void;
}

/** --- Concrete Elements --- */
class FullTimeEmployee implements Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {}
  accept(visitor: EmployeeVisitor): void {
    visitor.visitFullTimeEmployee(this);
  }
}

class Contractor implements Employee {
  constructor(
    public name: string,
    public hourlyRate: number,
    public hours: number,
  ) {}
  accept(visitor: EmployeeVisitor): void {
    visitor.visitContractor(this);
  }
}

/** --- Concrete Visitors --- */

// Payroll Calculator
class PayrollCalculator implements EmployeeVisitor {
  visitFullTimeEmployee(emp: FullTimeEmployee): void {
    const pay = emp.salary + 1000; // benefits
    console.log(`${emp.name} (Full-time): $${pay}`);
  }

  visitContractor(emp: Contractor): void {
    const pay = emp.hourlyRate * emp.hours;
    console.log(`${emp.name} (Contractor): $${pay}`);
  }
}

// Report Generator
class ReportGenerator implements EmployeeVisitor {
  visitFullTimeEmployee(emp: FullTimeEmployee): void {
    console.log(
      `{ "name": "${emp.name}", "type": "Full-time", "salary": ${emp.salary} }`,
    );
  }

  visitContractor(emp: Contractor): void {
    console.log(
      `{ "name": "${emp.name}", "type": "Contractor", "pay": ${emp.hourlyRate * emp.hours} }`,
    );
  }
}

/** --- Usage --- */
const employees: Employee[] = [
  new FullTimeEmployee("Alice", 5000),
  new Contractor("Bob", 40, 160),
];

const payroll = new PayrollCalculator();
const report = new ReportGenerator();

console.log("=== Payroll ===");
employees.forEach((emp) => emp.accept(payroll));

console.log("\n=== Report ===");
employees.forEach((emp) => emp.accept(report));

/*
You can add new operations (like TaxCalculator, BonusCalculator, etc.)
without modifying any Employee class.
Keeps your data (employees) separate from logic (visitors).
Perfect for systems that deal with hierarchies of objects where you often need to run different operations.
*/
