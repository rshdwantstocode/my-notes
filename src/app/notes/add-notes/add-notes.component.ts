import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../notes.service';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from '../../shared/control/control.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [FormsModule, ControlComponent, ButtonComponent],
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
