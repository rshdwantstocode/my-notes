import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../notes/notes.model';

@Component({
  selector: 'app-show-note',
  standalone: true,
  imports: [],
  templateUrl: './show-note.component.html',
  styleUrl: './show-note.component.css',
})
export class ShowNoteComponent {
  @Input({ required: true }) note?: Note;
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
