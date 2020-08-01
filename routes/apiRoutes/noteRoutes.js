const router = require('express').Router();
const { notes } = require('../../data/db.json');
const createNote = require('../../lib/Note.js')


router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});


router.post('/notes', (req, res) => {

  let highestId = notes[notes.length - 1].id;

  req.body.id = (parseInt(highestId) + 1).toString();

  const note = createNote(req.body, notes);

  res.json(note);
  ;
})


module.exports = router;