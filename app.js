// codes to pull in the required aspects for the inquirer prompts and html render
const path = require("path");
const fs = require("fs");

const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { REPL_MODE_STRICT } = require("repl");

// Renders the html with the now filled array
const renderHTML = () => {
    // Creates a directory for output if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR);
  }
  
  fs.writeFileSync(outputPath, render(employees));
};

// empty array to fill with the prompt responses
let employees = [];

// Prompt that allows you to continue building employees or render the html
const createEmployee = () => {
    inquirer.prompt([
        {
            type: "rawlist",
            message: "What type of employee would you like to add?",
            name: "employee",
            choices: [
                "Engineer",
                "Intern",
                "I am finished adding employees."
            ]
        },
    ]).then((response) => {
        // Checks if the response was for the engineer or intern or to end it and runs the corresponding code 
        if (response.employee === "Engineer") {
            createEngineer();
        } else if (response.employee === "Intern") {
            createIntern();
        } else {
            renderHTML();
        }
    })
}

// creates the engineer
const createEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Engineer's E-mail?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's Github?",
            name: "github"
        },
    ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(engineer);
            createEmployee();
        })
}

// creates the intern
const createIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Intern's E-mail?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Intern's school?",
            name: "school"
        },
    ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(intern);
            createEmployee();
        })
}

// Starts the prompts and fills out manager profile
const init = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Team Manager's name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the Team Manager's ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Team Manager's E-mail?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the Team Manager's office number?",
                name: "officeNumber"
            },
            {
                type: "rawlist",
                message: "What type of employee would you like to add?",
                name: "employee",
                choices: [
                    "Engineer",
                    "Intern"
                ]
            },
        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(manager);
            // checks which employee type the user inputted
            if (response.employee === "Engineer") {
                createEngineer();
            } else {
                createIntern();
            }
        });
}

// starts the first prompt
init();