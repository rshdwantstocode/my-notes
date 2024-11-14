import { Component } from '@angular/core';
import { AddNotesComponent } from './add-notes/add-notes.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [AddNotesComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  isAddNote = false;

  onAddNote() {
    this.isAddNote = true;
  }

  onCancelNote() {
    this.isAddNote = false;
  }
}
