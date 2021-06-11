// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const result = "school";
    const setSchool = new Intern("name", 123, "email@", result);

    expect(setSchool.school).toBe(result);
});

test("getRole() should return \"Intern\"", () => {
    const result = "Intern";
    const intern = new Intern("name", 123, "email@", "school", result);

    expect(intern.getRole()).toBe(result);
});

test("Can get school via getSchool()", () => {
    const result = "school";
    const getSchool = new Intern("name", 123, "email@", result);

    expect(getSchool.school).toBe(result);
});
