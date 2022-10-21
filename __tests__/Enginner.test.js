const Engineer = require("../lib/Engineer")

test("Creates engineer object", () => {
    const engineer = new Engineer("Name", "Id", "Email", "Role", "GitHub")

    expect(engineer.name).toBe("Name")
    expect(engineer.id).toBe("Id")
    expect(engineer.email).toBe("Email")
    expect(engineer.role).toBe("Role")
    expect(engineer.gitHub).toBe("GitHub")
})

test("Gets engineer role and gitHub", () => {
    const obj = {role: "Engineer", gitHub: "GitHub"}
    const {role, gitHub} = obj
    const engineer = new Engineer("", "", "", role, gitHub)

    expect(engineer.role).toBe("Engineer")
    expect(engineer.gitHub).toBe("GitHub")
})