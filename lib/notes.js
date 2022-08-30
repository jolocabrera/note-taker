const fs = require("fs");
const path = require("path");



function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ animals: animalsArray }, null, 2)
    );
    return animal;
}