// Ejercicio 1: Mostrar un nombre enviado desde el padre

import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  contador: number = 0;
  nombreParaHijo: string = 'Cristian';  // Nombre enviado al hijo
  nombre: string = 'Camilo';            // Nuevo nombre para el ejercicio 1
  mensajepadre = "este es el mensaje del padre";
  
  decrementar() {
    this.contador--;
  }
  
  incrementar() {
    this.contador++;
  }

  mensajeRecibido: string = '';
  recibeMensaje($event: string) {
    this.mensajeRecibido = $event;
  }
}