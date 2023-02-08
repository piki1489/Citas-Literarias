import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cita } from 'src/app/interfaces/cita.interface';
import { CitasServiceService } from 'src/app/services/citas-service.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() nuevaCita = new EventEmitter<Cita>();

  formulario: FormGroup;

  constructor(
    private citasService: CitasServiceService
  ) {
    this.formulario = new FormGroup({
      titulo_libro: new FormControl(),
      pagina: new FormControl(),
      autor: new FormControl(),
      texto: new FormControl(),
      fecha_cita: new FormControl(),
      notas: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const nuevaCita = this.citasService.create(this.formulario.value);
    this.nuevaCita.emit(nuevaCita);
  }

}
