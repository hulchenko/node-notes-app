const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Test notes..';
};

const addNote = function (title, body) {
  // command would load array of the existing notes(different notes var than in app.js)
  const notes = loadNotes();
  console.log(notes);
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      // values come from arguments in addNote function
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log('New note was created!');
  } else {
    console.log('Note name already exists');
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title; // return all of the elements that DO NOT match filter search, thus removing it.
  });
  if (notes.length !== notesToKeep.length) {
    console.log(chalk.green('Note has been removed!'));
    saveNotes(notesToKeep); // overwrite existing array with the one with removed element
  } else {
    console.log(chalk.red("Note doesn't exist!"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  // adds value to the existing array, does not overwrite it
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON); // returns final object-parsed value from JSON file
  } catch (error) {
    // if file doesn't exist -> return empty array
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
