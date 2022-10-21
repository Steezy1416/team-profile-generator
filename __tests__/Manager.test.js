const Manager = require("../lib/Manager")

test("Creates manager object", () => {
    const manager = new Manager("Name", "Id", "Email", "Role", "OfficeNumber")

    expect(manager.name).toBe("Name")
    expect(manager.id).toBe("Id")
    expect(manager.email).toBe("Email")
    expect(manager.role).toBe("Role")
    expect(manager.officeNumber).toBe("OfficeNumber")
})

test("Gets manager role", () => {
    const obj = {role: "manager"}
    const {role} = obj
    const manager = new Manager("", "", "", role)

    expect(manager.role).toBe("manager")
})