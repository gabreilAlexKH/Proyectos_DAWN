import { Component, EventEmitter, Output } from '@angular/core';
import { Mes } from 'src/app/interfases/mes';

@Component({
  selector: 'app-meses-form',
  templateUrl: './meses-form.component.html',
  styleUrls: ['./meses-form.component.css']
})
export class MesesFormComponent {

  protected mesInit: string = '01';
  protected mesFin: string = '12';

  protected meses: Mes[] = [
    { nombre: "Ene", cod: "01" }, { nombre: "Feb", cod: "02" },
    { nombre: "Mar", cod: "03" }, { nombre: "Abr", cod: "04" },
    { nombre: "May", cod: "05" }, { nombre: "Jun", cod: "06" },
    { nombre: "Jul", cod: "07" }, { nombre: "Ago", cod: "08" },
    { nombre: "Sep", cod: "09" }, { nombre: "Oct", cod: "10" },
    { nombre: "Nov", cod: "11" }, { nombre: "Dic", cod: "12" }
  ];


  @Output() onSelected = new EventEmitter<any>();

  constructor() {
  }

  /**
   * Emite un evento con los numeros de los meses escogidos
   */
  protected onSelectedMeses() {

    if (this.mesInit > this.mesFin) {
      this.onSelected.emit("");
    } else {
      this.onSelected.emit(this.mesInit + "-" + this.mesFin);
    }
  }
}
