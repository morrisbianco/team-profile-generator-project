// Pulls in the employee class
const Employee = require('./Employee.js');

// defines engineer as an extension of employee class; adds github
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

// exports engineer
module.exports = Engineer;