const reverse = require("../src/util")
const {expect} = require("chai");

test("reverse string", () => {
    expect(reverse("amit gupta")).to.be.equal("atpug tima");
})