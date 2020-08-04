import reverse from "../src/util";
import {expect} from "chai";

test("reverse string", () => {
    expect(reverse("amit gupta")).to.be.equal("atpug tima");
})