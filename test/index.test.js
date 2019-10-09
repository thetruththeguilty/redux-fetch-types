"use strict";
let { createBasicTypes, createFetchTypes, composeTypes } = require("../index");
var Types;
(function (Types) {
    Types[Types["A"] = 0] = "A";
    Types[Types["B"] = 1] = "B";
    Types[Types["C"] = 2] = "C";
})(Types || (Types = {}));
var FTypes;
(function (FTypes) {
    FTypes[FTypes["A"] = 0] = "A";
    FTypes[FTypes["B"] = 1] = "B";
    FTypes[FTypes["C"] = 2] = "C";
})(FTypes || (FTypes = {}));
let types = createBasicTypes("foo_", Types);
let fTypes = createFetchTypes("foo_", FTypes);
describe("test index", () => {
    it("print", () => {
        console.log(types);
        console.log(fTypes);
    });
});
