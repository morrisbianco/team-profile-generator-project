// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const result = 123;
    const officeNumObj = new Manager("name", 123, "email@", result);

    expect(officeNumObj.officeNumber).toBe(result);
});

test('getRole() should return "Manager"', () => {
    const result = "Manager";
    const manager = new Manager("name", 123, "email@", 123, result);

    expect(manager.getRole()).toBe(result);
});

test("Can get office number via getOffice()", () => {
    const result = 123;
    const getOfficeNum = new Manager("name", 123, "email@", result);

    expect(getOfficeNum.getOffice()).toBe(result);
});
