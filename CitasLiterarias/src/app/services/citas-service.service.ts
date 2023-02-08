import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasServiceService {

  arrCita: Cita[];
  arrCitas: Cita[]

  constructor() {
    this.arrCita = [
      {
        titulo_libro: 'Amar en tiempos de cólera',
        pagina: 318,
        autor: 'Gabriel García Márquez',
        fecha_cita: new Date(),
        notas: 'Amar en tiempos del cólera" es una de sus obras más conocidas y es considerada una de las mejores novelas de amor de la literatura mundial.',
        texto: "Ella misma se dio cuenta de que había llegado la hora de escoger entre la memoria de la pasión y la imposibilidad de seguir amándolo, y decidió escoger la memoria, porque la vida sin amor no era digna de ser vivida."

      }
    ]
    this.arrCitas = [];
  }

  getAll() {
    return this.arrCita;
  }

  create(pCita: Cita) {
    this.arrCita.push(pCita);
    return pCita;
  }

  addCita(pCita: Cita) {
    this.arrCitas.push(pCita);
  }

  getCitas(): Cita[] {
    return this.arrCitas;
  }

  addFav(pCita: Cita) {

    console.log('Cita agregada a favoritos: ', pCita);
  }

}
