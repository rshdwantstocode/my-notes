import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../notes/notes.model';
import { ControlComponent } from '../shared/control/control.component';
import { NoteService } from '../notes/notes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-note',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './show-note.component.html',
  styleUrl: './show-note.component.css',
})
export class ShowNoteComponent {
  @Input({ required: true }) note?: Note;
  @Output() cancel = new EventEmitter<void>();

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    console.log('init');
  }

  onEdit(id: string, input: string, textarea: string) {
    this.noteService.editNote({
      id: id,
      title: input,
      content: textarea,
    });

    this.cancel.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
