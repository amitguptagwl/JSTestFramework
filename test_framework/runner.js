#!/usr/bin/env node

const ts = required("typescript");
const fs = require("fs");
const path = require("path");

tests = [];

global.test = function(text, fn){
    tests.push(fn);
}

// Transpile source code


// Execute tests


function cli(args){
    const fileName = args[2];
    
}



cli(process.argv);