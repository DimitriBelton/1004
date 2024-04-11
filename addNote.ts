import * as fs from 'fs';

const NOTES_FILE_PATH = 'notes.txt';

function addNote(note: string): void {
    fs.appendFileSync(NOTES_FILE_PATH, note + '\n');
    console.log('Notiz hinzugefügt:', note);
}
