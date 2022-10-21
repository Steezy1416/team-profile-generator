const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const employeeTemplate = require("./src/page-template")
const fs = require("fs")

//array stores the types of employess and all of their data
const employees = []

//ask user questions concerning the manager
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

// lets user if they would want to add a manager or intern team member
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
            //if engineer then ask questions concerning the enginner
            //if intern then ask questions concerning the intern
            //else retrive the employee data from array and write a new file
            if (choicedata.choice === "Engineer") {
                engineerQuestions()
            }
            else if (choicedata.choice === "Intern") {
                internQuestions()
            }
            else {
                // creates the html template with all the employee data
                const template = employeeTemplate(employees)
                
                //write the new file
                writeFile(template)
            }
        })
}

//questions concerning the engineer
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
            // deconstructs engineer data and makes a new object
            const { name, id, email, gitHub } = engineerData
            const engineer = new Engineer(name, id, email, "Engineer", gitHub)
            engineer.getRole()
            engineer.getGitHub()
            //once the data is collected then it is pushed into the employee array
            employees.push(engineer)
            // lets you choose another team meamber again or assemble team
            choices()
        })
}

//questions concerning the intern with the same data collection method as the engineers
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

const writeFile = template => {
    //copy css file to dist folder
    fs.copyFile("./src/style.css", "./dist/style.css", err => {
        if(err) throw err
    })
    //writes html file into the dist folder
    fs.writeFile("./dist/index.html", template, err => {
        if(err) throw err
    })
    console.log("Your index.html and style.css files have been created and can be found in the 'dist' folder")
}

//retrieves manager data and gets the data like the intern and engineer
managerQuestions()
    .then(data => {
        const { name, id, email, officeNum } = data
        const manager = new Manager(name, id, email, "Manager", officeNum)
        manager.getRole()
        employees.push(manager)
    })
    .then(choices)
