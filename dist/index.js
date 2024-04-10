"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
// Pfad zur Datei, in der die Notizen gespeichert werden
var NOTES_FILE_PATH = 'notes.txt';
// Funktion zum Hinzufügen einer Notiz
function addNote(note) {
    fs.appendFileSync(NOTES_FILE_PATH, note + '\n');
    console.log('Notiz hinzugefügt:', note);
}
// Funktion zum Anzeigen aller Notizen
function showNotes() {
    try {
        var notes = fs.readFileSync(NOTES_FILE_PATH, 'utf-8').split('\n');
        console.log('Alle Notizen:');
        notes.forEach(function (note) { return console.log('-', note.trim()); });
    }
    catch (error) {
        console.error('Fehler beim Lesen der Notizen:', error);
    }
}
// Funktion zum Löschen einer Notiz
function deleteNote(noteToDelete) {
    try {
        var notes = fs.readFileSync(NOTES_FILE_PATH, 'utf-8').split('\n');
        var updatedNotes = notes.filter(function (note) { return note.trim() !== noteToDelete.trim(); });
        fs.writeFileSync(NOTES_FILE_PATH, updatedNotes.join('\n'));
        console.log('Notiz gelöscht:', noteToDelete);
    }
    catch (error) {
        console.error('Fehler beim Löschen der Notiz:', error);
    }
}
// Funktion zum Initialisieren der Anwendung
function initializeApp() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('Willkommen zur Notizverwaltungsanwendung!');
    rl.question('Was möchten Sie tun? (add / show / delete): ', function (action) {
        if (action === 'add') {
            rl.question('Geben Sie die Notiz ein, die Sie hinzufügen möchten: ', function (note) {
                addNote(note);
                rl.close();
            });
        }
        else if (action === 'show') {
            showNotes();
            rl.close();
        }
        else if (action === 'delete') {
            rl.question('Geben Sie den exakten Inhalt der zu löschenden Notiz ein: ', function (noteToDelete) {
                deleteNote(noteToDelete);
                rl.close();
            });
        }
        else {
            console.log('Ungültige Aktion.');
            rl.close();
        }
    });
}
// Anwendung initialisieren
initializeApp();
