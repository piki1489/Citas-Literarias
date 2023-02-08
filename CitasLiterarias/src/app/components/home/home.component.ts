import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita.interface';
import { CitasServiceService } from 'src/app/services/citas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private arrCitas: Cita[];

  constructor(private citasService: CitasServiceService) {
    this.arrCitas = [];
  }

  ngOnInit(): void {
    this.arrCitas = this.citasService.getCitas();
  }

  onCitaEnviada(pCita: Cita) {
    this.citasService.addCita(pCita);
  }

}
