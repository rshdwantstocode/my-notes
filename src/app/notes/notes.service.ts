import { Injectable } from '@angular/core';
import { addNote, Note } from './notes.model';

@Injectable({ providedIn: 'root' })
export class NoteService {
  private dummyNote = [
    {
      id: '1',
      title: 'dummy note',
      content: 'This is the 1st dummy note',
    },
    {
      id: '2',
      title: '2nd dummy note',
      content: 'This is the 2nd dummy note',
    },
    {
      id: '3',
      title: '3rd dummy note',
      content: 'This is the 3rd dummy note',
    },
  ];

  getNotes() {
    return this.dummyNote;
  }

  constructor() {
    const notes = localStorage.getItem('notes');

    if (notes) {
      this.dummyNote = JSON.parse(notes);
    }
  }

  addNote(noteData: addNote) {
    let noteID = this.dummyNote.length + 1;
    this.dummyNote.push({
      id: noteID.toString(),
      title: noteData.title,
      content: noteData.content,
    });
    this.saveNotes();
  }

  editNote(noteData: Note) {
    this.dummyNote.forEach((note) => {
      if (note.id === noteData.id) {
        note.title = noteData.title;
        note.content = noteData.content;
      }
    });
    this.saveNotes();
  }

  removeNote(id: string) {
    this.dummyNote = this.dummyNote.filter((note) => note.id !== id);
    this.saveNotes();
  }

  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.dummyNote));
  }
}
