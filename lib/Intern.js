const Employee = require("./Employee")

//extends the Employee object and also has its own methods and attributes
class Intern extends Employee{
    constructor(name, id, email, role, school){
        super(name, id, email, role)
        this.school = school
    }
    getSchool(){
        return this.school
    }
}
module.exports = Intern