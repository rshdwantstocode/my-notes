import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-notes';
}
