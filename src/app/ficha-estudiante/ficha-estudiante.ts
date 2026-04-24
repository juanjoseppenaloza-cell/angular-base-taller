import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha-estudiante',
  imports: [FormsModule],
  templateUrl: './ficha-estudiante.html',
  styleUrl: './ficha-estudiante.css'
})
export class FichaEstudiante {

  
  nombre = '';
  codigo = 0;
  programa = '';
  semestre = 1;
  correo = '';
  tieneBeca = false;
  colorFavorito = '#ffffff';

  // signals
  contadorGuardados = signal(0);
  estado = signal('Sin guardar');

  guardar() {
    console.log(this.nombre, this.codigo, this.programa);
    this.contadorGuardados.update(v => v + 1);
    this.estado.set('Guardado ✅');
  }

  limpiar() {
    this.nombre = '';
    this.codigo = 0;
    this.programa = '';
    this.semestre = 1;
    this.correo = '';
    this.tieneBeca = false;
    this.colorFavorito = '#ffffff';

    this.estado.set('Sin guardar');
  }

  correoValido() {
    return this.correo.endsWith('@unipaz.edu.co');
  }
}