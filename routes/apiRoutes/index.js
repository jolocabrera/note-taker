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



module.exports = router;
