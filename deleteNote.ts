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
