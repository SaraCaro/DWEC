import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioPrueba';
  listaDatos = new Array<string>();

  capturaEvento(dato: string){
    console.log('Evento capturado con datos = ' + dato);
    this.listaDatos.push(dato);
  }
}
