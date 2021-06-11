// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const start = new Employee();

    expect(typeof(start)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const result = "Andy";
    const nameEmp = new Employee(result);

    expect(nameEmp.name).toBe(result);
});

test("Can set id via constructor argument", () => {
    const result = 1;
    const idEmp = new Employee("name", result);

    expect(idEmp.id).toBe(result);
});

test("Can set email via constructor argument", () => {
    const result = "Andy@andy.com";
    const emailEmp = new Employee("name", 1, result);

    expect(emailEmp.email).toBe(result);
});

test("Can get name via getName()", () => {
    const result = "Andy";
    const name = new Employee(result);

    expect(name.getName()).toBe(result);
});

test("Can get id via getId()", () => {
    const result = 1;
    const id = new Employee("name", result);

    expect(id.getId()).toBe(result);
});

test("Can get email via getEmail()", () => {
    const result = "Andy@andy.com";
    const email = new Employee("name", 1, result);

    expect(email.getEmail()).toBe(result);
});

test("getRole() should return \"Employee\"", () => {
    const result = "Employee";
    const employee = new Employee("name", 1, "email@");

    expect(employee.getRole()).toBe(result);
});
