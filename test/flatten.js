const expect  = require("chai").expect;
const flatten = require("../src/flatten").flatten;


describe("flatten function", function() {
  it("flattens an array of arrays", function() {
    var flat = flatten([[1,2],[2,3],[4,5]]);
    expect(flat).to.deep.equal([1,2,2,3,4,5]);
  });

  it("flattens an already flatten array", function() {
    var flat = flatten([1,4,5]);
    expect(flat).to.deep.equal([1,4,5]);
  });

  it("flattens a mix of numbers and arrays", function() {
    var flat = flatten([1,[4,5],6,[7,8]]);
    expect(flat).to.deep.equal([1,4,5,6,7,8]);
  });
});
