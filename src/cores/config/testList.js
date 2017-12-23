const testList = {
  "scenarios": 
    [
      {
        "index": 1,
        "name": "Members CRUD",
        "fileName": "./src/cores/test/testList/MembersCRUD.js",
        "bizClass": "Members",
        "bizClassPath": "../../biz",
        "testCases": 
          [
            {
              "index": 1,
              "name": "Insert a Member.",
              "given": {
                "values": {name: "Apaichon Punopas", email: "apaichon@gmail.com"},
                "expect": "'Apaichon Punopas'"
              },
              "when": {
                "text": "Should return memeber name is \"Apaichon Punopas\"",
                "object": "member",
                "method": "Add"
              },
              "then": {
                "method": "equal",
                "result": "result.ops[0].name"
              }
            },
            {
              "index": 2,
              "name": "Update a Member.",
              "given": {
                "values": 
                {
                  condition: { name: "Apaichon Punopas" },
                  data: { email: "apaichon@hotmail.com" }
                } ,
                "expect": "1"
              },
              "when": {
                "text": "Should return update status is 1",
                "object": "member",
                "method": "Edit"
              },
              "then": {
                "method": "equal",
                "result": "result.result.nModified"
              }
            }
          ]
      }
    ]
}

export { testList }