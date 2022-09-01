const fs = require("fs");
const path = require("path");
const uniqid = require('uniqid');



function createNewNote(body, notesArray) {
    const note = body;

    //set unique id for note
    note.id = uniqid();

    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}


module.exports = {createNewNote};