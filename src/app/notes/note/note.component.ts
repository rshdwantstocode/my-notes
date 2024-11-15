import { Component, Input } from '@angular/core';
import { Note } from '../notes.model';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
  @Input({ required: true }) note!: Note;
}
