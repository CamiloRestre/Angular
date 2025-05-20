// Ejercicio 1: Mostrar un nombre enviado desde el padre

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
  @Input() nombre: string = '';  // Agregamos el Input nombre
  contador: number = 0;
  mensaje: string = '';

  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();
  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  incrementar() {
    this.incrementarDesdeHijo.emit();
  }

  decrementar() {
    this.decrementarDesdeHijo.emit();
  }

  enviarMensaje() {
    this.mensajeDesdeHijo.emit(this.mensaje);
  }
}
