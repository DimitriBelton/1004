import * as fs from 'fs';
import * as readline from 'readline';

// Pfad zur Datei, in der die Notizen gespeichert werden
const NOTES_FILE_PATH = 'notes.txt';

// Funktion zum Hinzufügen einer Notiz
function addNote(note: string): void {
    try {
        fs.appendFileSync(NOTES_FILE_PATH, note + '\n');
        console.log('Notiz hinzugefügt:', note);
    } catch (error) {
        console.error('Fehler beim Hinzufügen der Notiz:', error);
    }
}

// Funktion zum Anzeigen aller Notizen
function showNotes(): void {
    try {
        const notes = fs.readFileSync(NOTES_FILE_PATH, 'utf-8').split('\n');
        console.log('Alle Notizen:');
        notes.forEach(note => console.log('-', note.trim()));
    } catch (error) {
        console.error('Fehler beim Lesen der Notizen:', error);
    }
}

// Funktion zum Löschen einer Notiz
function deleteNote(noteToDelete: string): void {
    try {
        const notes = fs.readFileSync(NOTES_FILE_PATH, 'utf-8').split('\n');
        const updatedNotes = notes.filter(note => note.trim() !== noteToDelete.trim());
        fs.writeFileSync(NOTES_FILE_PATH, updatedNotes.join('\n'));
        console.log('Notiz gelöscht:', noteToDelete);
    } catch (error) {
        console.error('Fehler beim Löschen der Notiz:', error);
    }
}

// Funktion zum Initialisieren der CLI
function initializeCLI(): void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Willkommen zur Notizverwaltungsanwendung!');

    rl.question('Was möchten Sie tun? (add / show / delete): ', (action: string) => {
        if (action === 'add') {
            rl.question('Geben Sie die Notiz ein, die Sie hinzufügen möchten: ', (note: string) => {
                addNote(note);
                rl.close();
            });
        } else if (action === 'show') {
            showNotes();
            rl.close();
        } else if (action === 'delete') {
            rl.question('Geben Sie den exakten Inhalt der zu löschenden Notiz ein: ', (noteToDelete: string) => {
                deleteNote(noteToDelete);
                rl.close();
            });
        } else {
            console.log('Ungültige Aktion.');
            rl.close();
        }
    });
}

// Anwendung initialisieren
initializeCLI();
