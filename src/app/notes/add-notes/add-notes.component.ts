import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../notes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.css',
})
export class AddNotesComponent {
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';
  enteredContent = '';

  constructor(private noteService: NoteService) {}

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.noteService.addNote({
      title: this.enteredTitle,
      content: this.enteredContent,
    });
    this.cancel.emit();
  }
}
