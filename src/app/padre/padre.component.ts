// Ejercicio 1: Mostrar un nombre enviado desde el padre

import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  contador: number = 0;
  nombreParaHijo: string = 'Cristian';  // Nombre enviado al hijo ejercicio 1 
  nombre: string = 'Cristian Restrepo';            // Nuevo nombre para el ejercicio 1
  mensajepadre = "este es el mensaje del padre";

  // Ejercicio 3 se agrega un nuevo metodo
  actualizarContador(nuevoValor: number) {
    this.contador = nuevoValor;
    console.log('Contador actualizado en padre:', this.contador);
  }
  
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