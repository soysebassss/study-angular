import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 14000
    }, {
        nombre: 'Vegeta',
        poder: 7500
    }]

    get personajes(): Personaje[] {
        return [...this._personajes]
    }

    constructor() { }

    agregarPersonaje(newPersonaje: Personaje) {
        this._personajes.push(newPersonaje)
    }
}