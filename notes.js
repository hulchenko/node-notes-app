const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  // command would load array of the existing notes(different notes var than in app.js)
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title); //same as notes.filter, except it will stop an execution as soon as it finds a duplicate.

  if (!duplicateNote) {
    //if no duplicate
    notes.push({
      // values come from arguments in addNote function
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green('New note was created!'));
  } else {
    console.log(chalk.red('Note name already exists'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title); // return all of the elements that DO NOT match filter search, thus removing it.
  if (notes.length !== notesToKeep.length) {
    console.log(chalk.green('Note has been removed!'));
    saveNotes(notesToKeep); // overwrite existing array with the one with removed element
  } else {
    console.log(chalk.red("Note doesn't exist!"));
  }
};

const listNotes = () => {
  console.log(chalk.blue('Listing notes!'));
  const notes = loadNotes();
  notes.forEach((i) => console.log(i.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red(`Note doesn't exist`));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
