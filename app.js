//npm modules import
const validator = require('validator'); // = ./node_modules/validator
const chalk = require('chalk');
//node import
const getNotes = require('./notes.js');
// ---
const msg = getNotes();
console.log(msg);
console.log(validator.isURL('google.ca'));
console.log(chalk.red('Hello!'));
