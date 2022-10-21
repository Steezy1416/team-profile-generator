const Employee = require("./Employee")

//extends the Employee object and also has its own methods and attributes
class Engineer extends Employee{
    constructor(name, id, email, role, gitHub){
        super(name, id, email, role)
        this.gitHub = gitHub
    }
    getGitHub(){
        return this.gitHub
    }
}

module.exports = Engineer