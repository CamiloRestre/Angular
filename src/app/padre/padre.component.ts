import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  nombre?: string;
  contador: number = 0;
  mensajepadre = "este es el mensaje del padre";
  mensajeRecibido: string = '';

  constructor(private _servicioFamiliar: ServicioFamiliarService) { }

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor ());
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
