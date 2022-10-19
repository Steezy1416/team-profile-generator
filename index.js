const inquirer = require("inquirer")

const engineers = []
const interns = []

const managerQuestions = () => {
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

const choices = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What type of team member would you like to add?",
                choices: ["Engineer", "Intern", "Assemble Team"]
            }
        ])
        .then(choicedata => {
            if(choicedata.choice === "Engineer"){
                engineerQuestions()
            }
            else if(choicedata.choice === "Intern")
            {
                internQuestions()
            }
            else{
                console.log(engineers)
                console.log(interns)
            }
        })
}

const engineerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: isManagerName => {
                    if (isManagerName) { return true }
                    else { return false }
                }

            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
                validate: isManagerId => {
                    if (isManagerId) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
                validate: isManagerEmail => {
                    if (isManagerEmail) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the engineer's GitHub username?",
                validate: isOfficeNum => {
                    if (isOfficeNum) { return true }
                    else { return false }
                }
            }
        ])
        .then(engineerData => {
            engineers.push(engineerData)
            choices()
        })
}

const internQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
                validate: isManagerName => {
                    if (isManagerName) { return true }
                    else { return false }
                }

            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's id?",
                validate: isManagerId => {
                    if (isManagerId) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?",
                validate: isManagerEmail => {
                    if (isManagerEmail) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
                validate: isOfficeNum => {
                    if (isOfficeNum) { return true }
                    else { return false }
                }
            }
        ])
        .then(internData => {
            interns.push(internData)
            choices()
        })
}

managerQuestions()
    .then(data => {
        console.log(data)
    })
    .then(choices)
    // .then(choicedata => {
    //     console.log(choicedata)
    // })
    // .then(engineerQuestions)
    // .then(enginedata => {
    //     console.log(enginedata)
    // })
    // .then(internQuestions)
    // .then(interndata => {
    //     console.log(interndata)
    // })
    