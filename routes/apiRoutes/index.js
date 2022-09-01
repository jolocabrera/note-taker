const router = require("express").Router();
const  notes  = require("../../db/db.json");
const { createNewNote } = require("../../lib/notes");
const fs = require("fs");


router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);


});

router.delete('/notes/:id', (req, res) => {
    //fetch note by id
    let noteId = req.params.id
    console.log(noteId);
    let newList = notes.filter(note => note.id !== noteId);
    console.log(newList);

    fs.writeFileSync(`${notes}`, JSON.stringify(newList));

    res.json(newList);
})

module.exports = router;
