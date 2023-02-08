import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita.interface';
import { CitasServiceService } from 'src/app/services/citas-service.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  @Input() entradaCita: Cita[];

  constructor(
    private citasServives: CitasServiceService
  ) {
    this.entradaCita = [];
  }

  ngOnInit(): void {
  }

  addFav(cita: Cita) {
    this.citasServives.addFav(cita);
  }

}

