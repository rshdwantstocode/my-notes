import { Component, Input } from '@angular/core';
import { Note } from '../notes.model';
import { ShowNoteComponent } from '../../show-note/show-note.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [ShowNoteComponent],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
  @Input({ required: true }) note!: Note;

  onClick(noteID: string) {
    console.log(noteID);
  }
  isShowNote = false;

  onshowNote() {
    this.isShowNote = true;
  }
}
