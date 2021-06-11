// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const result = "github";
    const setGithub = new Engineer("name", 123, "email@", result);

    expect(setGithub.github).toBe(result);
});

test("getRole() should return \"Engineer\"", () => {
    const result = "Engineer";
    const engineer = new Engineer("name", 123, "email@", "github", result);

    expect(engineer.getRole()).toBe(result);
});

test("Can get GitHub username via getGithub()", () => {
    const result = "github";
    const getGithub = new Engineer("name", 123, "email@", result);

    expect(getGithub.getGithub()).toBe(result);
});
