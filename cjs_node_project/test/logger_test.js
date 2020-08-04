const logger = require("../src/logger")
const {expect} = require("chai");

test("info", () => {
    mockConsole("amit gupta");
    logger.info("amit gupta");
})
test("warn", () => {
    mockConsole("amit gupta");
    logger.warn("\033[1;33mamit gupta");
})
test("error", () => {
    mockConsole("\033[31mamit gupta");
    logger.erro("amit gupta");
})
test("fail", () => {
    mockConsole("amit k gupta");
    logger.info("amit gupta");
})

function mockConsole(msg){

    const tempConsole = console;
    
    console = {
        log: function(text){
            expect(text).to.be.equal(msg)
            console = tempConsole;
        }
    }
}