/*
Scenario: Payroll System

You work in a company that has different types of employees:

Full-time employees
Contractors

Now, you need to:
Calculate total salary (including benefits for full-time employees)
Generate a report (CSV, JSON, etc.)
*/

class FullTimeEmployee {
  constructor(
    public name: string,
    public salary: number,
  ) {}

  calculatePay() {
    return this.salary + 1000; // includes benefits
  }

  report() {
    return `${this.name}, Full-time, ${this.salary}`;
  }
}

class Contractor {
  constructor(
    public name: string,
    public hourlyRate: number,
    public hours: number,
  ) {}

  calculatePay() {
    return this.hourlyRate * this.hours;
  }

  report() {
    return `${this.name}, Contractor, ${this.hourlyRate * this.hours}`;
  }
}

// Using
const employees = [
  new FullTimeEmployee("Alice", 5000),
  new Contractor("Bob", 40, 160),
];

employees.forEach((emp) => {
  console.log(emp.calculatePay());
  console.log(emp.report());
});

/*
Each class contains logic for every operation.
Adding a new operation (like exportToJSON()) means editing all employee classes.
Violates Open/Closed Principle.
*/
