import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Output() nuevoDato = new EventEmitter<string>();

  datoIntroducir = '';

  introduceDato(){
    this.nuevoDato.emit(this.datoIntroducir);
    this.datoIntroducir = '';
  }
}
