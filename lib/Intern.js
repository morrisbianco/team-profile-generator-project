// pulls in employee
const Employee = require('./Employee.js');

// defines intern as an extension of employee; adds school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

// exports intern
module.exports = Intern;