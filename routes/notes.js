const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for all notes`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting new note
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add new note`);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting new note');
  }
});

// DELETE Route for a specific note
notes.delete('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((notes) => notes.note_id !==noteId);

      writeToFile('./db/db.json', result);

      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

module.exports = notes;