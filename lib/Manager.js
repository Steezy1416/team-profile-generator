const Employee = require("./Employee")

//extends the Employee object and also has its own methods and attributes
class Manager extends Employee{
    constructor(name, id, email, role, officeNumber){
        super(name, id, email, role)
        this.officeNumber = officeNumber
    }
}

module.exports = Manager