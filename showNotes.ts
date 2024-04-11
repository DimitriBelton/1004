function showNotes(): void {
    try {
        const notes = fs.readFileSync(NOTES_FILE_PATH, 'utf-8').split('\n');
        console.log('Alle Notizen:');
        notes.forEach(note => console.log('-', note.trim()));
    } catch (error) {
        console.error('Fehler beim Lesen der Notizen:', error);
    }
}
