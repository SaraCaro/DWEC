import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TITULO';
  nombre = 'Jose';

  capturaEvento(dato: string) {
    console.log('He capturado el evento con dato: ' + dato);
    this.title = dato;
  }

  ngOnInit() {
    this.nombre = 'Sara';
  }
}
