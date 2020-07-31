const fs = require("fs");
const path = require("path");

// Creates a new note and adds it to the DB.
function createNote(body, notesArray) {
const note = body;
notesArray.push(note);
fs.writeFileSync(
  path.join(__dirname, "../data/db.json"),
  JSON.stringify({ notes: notesArray }, null, 2)
);
  return note;
}

module.exports = { createNote };