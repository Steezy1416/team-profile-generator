const generateManager = (employeeTemplate) => {
    const {name, id, email, role, officeNumber} = employeeTemplate[0]
    return`
    <section id="manager-container" class="container">
    <div id="manager-box">
        <div class="icon container">
        <i class="icon fa-solid fa-mug-hot"></i>
        </div>
        <div class="info-box">
            <p class="name">${role} <br> ${name}</p>
           <ul class="info-container">
            <li class="list-item">ID: ${id} </li>
            <li class="list-item">Email:<a href="mailto:${email}">${email}</a> </li>
            <li class="list-item">Office Number: ${officeNumber} </li>
           </ul> 
        </div>
    </div>
</section>`
}

const generateEmployees = (employeeTemplate) => {
    const employeeArr = []
    for(let i = 1; i < employeeTemplate.length; i++){
        if(employeeTemplate[i].role === "Engineer"){
            const {name, id, role, email, gitHub} = employeeTemplate[i]
            employeeArr.push(`
            <div class="employee-box">
            <div class="icon container">
            <i class="icon fa-solid fa-wrench"></i>
            </div>
            <div class="info-box">
                <p class="name">${role} <br> ${name}</p>
               <ul class="info-container e-container">
                <li class="list-item">ID: ${id}</li>
                <li class="list-item">Email: <a href="mailto:${email}">${email}</a> </li>
                <li class="list-item">GitHub: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a> </li>
               </ul> 
            </div>
        </div>`)
            
        }
        else {
            const {name, id, role, email, school} = employeeTemplate[i]
            employeeArr.push(`
            <div class="employee-box">
            <div class="icon container">
                <i class="icon fa-solid fa-graduation-cap"></i>
            </div>
            <div class="info-box">
                <p class="name">${role} <br> ${name}</p>
               <ul class="info-container e-container">
                <li class="list-item">ID: ${id}</li>
                <li class="list-item">Email: <a href="mailto:${email}">${email}</a> </li>
                <li class="list-item">School: ${school}</li>
               </ul> 
            </div>
        </div>`)
            
        }
    }
    return employeeArr.join("")
}



module.exports = employeeTemplate => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/2f7bf6f30a.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        ${generateManager(employeeTemplate)}

        <section id="employee-container">
            ${generateEmployees(employeeTemplate)}
        </section>
    
    </body>
    </html>`
}