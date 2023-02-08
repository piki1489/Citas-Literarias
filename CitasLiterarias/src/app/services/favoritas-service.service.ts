import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritasServiceService {

  private arrCitas: Cita[] = [];

  constructor() { }



}


