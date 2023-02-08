import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita.interface';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  @Input() entradaCita: Cita[];

  constructor() {
    this.entradaCita = [];
  }

  ngOnInit(): void {
  }

}
