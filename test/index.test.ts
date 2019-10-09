let { createBasicTypes, createFetchTypes, composeTypes } = require("../index")

enum Types {
  A, B, C
}

enum FTypes {
  A, B, C
}

let types = createBasicTypes("foo_", Types)
let fTypes = createFetchTypes("foo_", FTypes)

describe("test index", () => {

  it("print", () => {
    console.log(types)
    console.log(fTypes)
  })
})