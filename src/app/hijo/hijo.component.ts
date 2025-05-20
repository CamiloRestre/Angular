// Ejercicio 1: Mostrar un nombre enviado desde el padre

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
  @Input() nombre: string = '';  // Ejercicio 1
  @Input() contadorInicial: number = 0;
  
  @Output() contadorActualizado = new EventEmitter<number>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();
  @Output() mensajeDesdeHijo = new EventEmitter<string>();


  // Enviar datos del padre al hijo (@Input()) y que el hijo los actualice usando @Output().
  private _contador: number = 0;
  mensaje: string = '';

  // Getter y Setter para el contador
  get contador(): number {
    return this._contador;
  }

  set contador(valor: number) {
    this._contador = valor;
    this.contadorActualizado.emit(this._contador);
  }

  ngOnInit() {
    this._contador = this.contadorInicial;
  }


  incrementar() {
    this.incrementarDesdeHijo.emit();
  }

  decrementar() {
    this.decrementarDesdeHijo.emit();
  }

  enviarMensaje() {
    if (this.mensaje.trim() !== '') {
      this.mensajeDesdeHijo.emit(this.mensaje);
      this.mensaje = ''; // Ejercicio 2
    }
  }
}
