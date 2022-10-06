import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) { }

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar() {
    const { poder = 0, nombre = '' } = this.nuevo
    if (nombre.trim().length > 0 && poder > 0) {
      // this.onNewPersonaje.emit(this.nuevo)
      this.dbzService.agregarPersonaje(this.nuevo)
      this.nuevo = { nombre: '', poder: 0 }
    }
  }
}
