import { Component, Input } from '@angular/core';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { Note } from './notes.model';
import { NoteComponent } from './note/note.component';
import { NoteService } from './notes.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [AddNotesComponent, NoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  constructor(private noteService: NoteService) {}

  get allNotes() {
    return this.noteService.getNotes();
  }
  isAddNote = false;

  onAddNote() {
    this.isAddNote = true;
  }

  onCancelNote() {
    this.isAddNote = false;
  }
}
