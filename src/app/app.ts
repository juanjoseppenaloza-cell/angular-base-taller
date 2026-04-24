import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { FichaEstudiante } from './ficha-estudiante/ficha-estudiante';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, FichaEstudiante],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> upstream/main
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('Taller Data Binding');
}
=======
  protected readonly title = signal('angular-base');
}
>>>>>>> upstream/main
