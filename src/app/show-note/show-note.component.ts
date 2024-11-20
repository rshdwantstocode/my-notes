import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-show-note',
  standalone: true,
  imports: [],
  templateUrl: './show-note.component.html',
  styleUrl: './show-note.component.css',
})
export class ShowNoteComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
