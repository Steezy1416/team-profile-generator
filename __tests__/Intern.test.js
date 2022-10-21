const Intern = require("../lib/Intern")

test("Creates intern object", () => {
    const intern = new Intern("Name", "Id", "Email", "Role", "School")

    expect(intern.name).toBe("Name")
    expect(intern.id).toBe("Id")
    expect(intern.email).toBe("Email")
    expect(intern.role).toBe("Role")
    expect(intern.school).toBe("School")
})

test("Gets intern role and school", () => {
    const obj = {role: "intern", school: "School"}
    const {role, school} = obj
    const intern = new Intern("", "", "", role, school)

    expect(intern.role).toBe("intern")
    expect(intern.school).toBe("School")
})