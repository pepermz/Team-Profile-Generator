class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        return `Name: ${this.name}`
    }
    getId() {
        return `ID: ${this.id}`
    }
    getEmail() {
        return `Email: ${this.email}`
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;