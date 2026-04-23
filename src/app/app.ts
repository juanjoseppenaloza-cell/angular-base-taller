import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FichaEstudiante } from './ficha-estudiante/ficha-estudiante';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, FichaEstudiante],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Taller Data Binding');
}