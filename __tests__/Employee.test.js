const Employee = require("../lib/Employee")

test("creates a employee object", () => {
    const employee = new Employee("Michael Scott", "1234", "random@email.com", "Employee")

    expect(employee.name).toBe("Michael Scott")
    expect(employee.id).toBe("1234")
    expect(employee.email).toBe("random@email.com")
    expect(employee.role).toBe("Employee")
})

test("gets employee name", () => {
    const obj = {name: "Spiderman"}
    const {name} = obj
    const employee = new Employee(name)
    
    expect(employee.getName(obj)).toBe("Spiderman")
})

test("gets employee id", () => {
    const obj = {id: "1234"}
    const {id} = obj
    const employee = new Employee("", id)
    
    expect(employee.getId(obj)).toBe("1234")
})

test("gets employee email", () => {
    const obj = {email: "random@email.com"}
    const {email} = obj
    const employee = new Employee("", "", email)
    
    expect(employee.getEmail(obj)).toBe("random@email.com")
})

test("gets employee role", () => {
    const obj = {role: "Employee"}
    const {role} = obj
    const employee = new Employee("", "", "",role)
    
    expect(employee.getRole(obj)).toBe("Employee")
})
