import { Component, Input } from '@angular/core';
import { Note } from '../notes.model';
import { ShowNoteComponent } from '../../show-note/show-note.component';
import { NoteService } from '../notes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [ShowNoteComponent, CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
  @Input({ required: true }) note!: Note;

  constructor(private noteService: NoteService) {}

  onClick(noteID: string) {
    console.log(noteID);
  }
  isShowNote = false;

  onshowNote() {
    this.isShowNote = true;
  }
  ondontShowNote() {
    this.isShowNote = false;
  }

  onDelete() {
    this.noteService.removeNote(this.note.id);
  }
}
