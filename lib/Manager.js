// pulls in employee class
const Employee = require('./Employee.js');

// defines manager as an extension of employee; adds office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
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

    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return 'Manager';
    }
}

// exports manager
module.exports = Manager;