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

  addNote(noteData: addNote) {
    let noteID = this.dummyNote.length + 1;
    this.dummyNote.push({
      id: noteID.toString(),
      title: noteData.title,
      content: noteData.content,
    });
  }

  removeNote(id: string) {
    this.dummyNote = this.dummyNote.filter((note) => note.id !== id);
  }
}
