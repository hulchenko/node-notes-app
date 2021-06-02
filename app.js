// npm modules import
const validator = require('validator'); // = ./node_modules/validator
const chalk = require('chalk');
const yargs = require('yargs');
// node import
const notes = require('./notes.js');
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
  handler(argv) {
    notes.addNote(argv.title, argv.body); //in notes.js
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler() {
    console.log('Note listed');
  },
});

// add, remove, read, list
yargs.parse(); //displays output in the command line
