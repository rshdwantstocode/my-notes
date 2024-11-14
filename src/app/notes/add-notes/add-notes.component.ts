import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [],
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.css',
})
export class AddNotesComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
