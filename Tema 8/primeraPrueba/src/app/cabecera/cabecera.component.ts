import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  @Input() titulo = '';

  @Output() miPrimerEvento = new EventEmitter<string>();


  trataEvento() {
    console.log('Salta evento de click');
    this.miPrimerEvento.emit('Genera evento el componente cabecera');
  }

  ngOnInit() {
    console.log('Salta evento de Inicio');
  }

}
