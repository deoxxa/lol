#!/usr/bin/env node

var lol = require("./");

var exclamation = lol();

console.log(exclamation);
console.log(exclamation + "");
console.log(JSON.stringify(exclamation));
