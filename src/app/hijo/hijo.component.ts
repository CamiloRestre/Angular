import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  contador: number = 0;
  @Input() recibehijo: string ='';
  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  mensaje: string ='';
  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  decrementar(){
    this.contador--;

  }
  incrementar(){
    this.contador++;
  }


}
