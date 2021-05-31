// npm modules import
const validator = require('validator'); // = ./node_modules/validator
const chalk = require('chalk');
const yargs = require('yargs');
// node import
const getNotes = require('./notes.js');
// ---

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true, //command arguments required
      type: 'string',
    },
    body: {
      describe: 'This is a body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log('Title: ', argv.title);
    console.log('Body: ', argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Note removed');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading a note');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () {
    console.log('Note listed');
  },
});

// add, remove, read, list
yargs.parse(); //displays output in the command line
