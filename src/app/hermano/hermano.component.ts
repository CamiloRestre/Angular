import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {
  nombre?: string;
  contador: number = 0;
  mensajeRecibido?: string;

  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMenor('Lucas');
    this.nombre = this._servicioFamiliar.getHermanoMenor();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMayor());
  }
  preguntar() {
    console.log(this._servicioFamiliar.preguntarporHijo());
  }

  decrementar() {
    this.contador--;
  }

  incrementar() {
    this.contador++;
  }

  recibirMensaje(event: string) {
    this.mensajeRecibido = event;
  }

}
