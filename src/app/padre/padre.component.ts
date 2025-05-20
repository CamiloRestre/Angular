import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  contador: number = 0;
  mensajepadre= "este es el mensaje del padre";
  decrementar(){
    this.contador--;

  }
  incrementar(){
    this.contador++;
  }

  mensajeRecibido: string = '';
  recibirMensaje($event : string) {
    this.mensajeRecibido = $event;
  }

}
