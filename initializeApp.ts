import * as readline from 'readline';

function initializeApp(): void {
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
initializeApp();