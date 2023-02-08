import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritasServiceService {

  arrFav: Cita[]

  constructor() {
    this.arrFav = [];
  }

  add(pCita: Cita) {

  }

  remove(pIndex: Number) {

  }

}
