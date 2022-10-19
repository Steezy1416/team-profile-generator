const inquirer = require("inquirer")

const teamQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: isManagerName => {
                    if (isManagerName) { return true }
                    else { return false }
                }

            },
            {
                type: "input",
                name: "employeeId",
                message: "What is the team manager's employee id?",
                validate: isManagerId => {
                    if (isManagerId) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: isManagerEmail => {
                    if (isManagerEmail) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "officeNum",
                message: "What is the manager's office number?",
                validate: isOfficeNum => {
                    if (isOfficeNum) { return true }
                    else { return false }
                }
            },
        ])
}

teamQuestions()
    .then(data => {
        console.log(data)
    })
    