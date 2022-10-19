const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const employees = []

const managerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: isManagerName => {
                    if (isManagerName) { return true }
                    else { return false }
                }

            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's employee id?",
                validate: isManagerId => {
                    if (isManagerId) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "email",
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
     inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What type of team member would you like to add?",
                choices: ["Engineer", "Intern", "Assemble Team"]
            }
        ])
        .then(choicedata => {
            if (choicedata.choice === "Engineer") {
                engineerQuestions()
            }
            else if (choicedata.choice === "Intern") {
                internQuestions()
            }
            else {
                console.log(employees)
                return
            }
        })
}

const engineerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: isManagerName => {
                    if (isManagerName) { return true }
                    else { return false }
                }

            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's id?",
                validate: isManagerId => {
                    if (isManagerId) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "email",
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
            const { name, id, email, gitHub } = engineerData
            const engineer = new Engineer(name, id, email, "Engineer", gitHub)
            engineer.getRole()
            engineer.getGitHub()
            employees.push(engineer)
            choices()
        })
}

const internQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: isManagerName => {
                    if (isManagerName) { return true }
                    else { return false }
                }

            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
                validate: isManagerId => {
                    if (isManagerId) { return true }
                    else { return false }
                }
            },
            {
                type: "input",
                name: "email",
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
            const { name, id, email, school } = internData
            const intern = new Intern(name, id, email, "Intern", school)
            intern.getRole()
            intern.getSchool()
            employees.push(intern)
            choices()
        })
}

managerQuestions()
    .then(data => {
        const { name, id, email, officeNum } = data
        const manager = new Manager(name, id, email, "Manager", officeNum)
        manager.getRole()
        employees.push(manager)
    })
    .then(choices)
    //i want this to execute when the user picks "Assemble team in the choices function"
    // Right now if you run node index after the manager questions it show the list options and on the assemble team it says the console.log right next to it
    .then(() => {
        console.log("Test to make sure this logs after assembling team")
    })
