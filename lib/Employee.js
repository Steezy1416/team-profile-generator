const inquirer = require("inquirer")

class Employee {
    constructor(name = "", id = "", email = ""){
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: isManagerName => {
                    if (isManagerName) { return true }
                    else { return false }
                }
            }
        ])
        .then(data => {
            this.name = data.managerName
            console.log(this.name)
            console.log(this)
            return`Manager is called ${this.name}!`
        })
        
        
    }
}

const manager = new Employee
manager.getName()
console.log(manager)
console.log(manager.getName())

