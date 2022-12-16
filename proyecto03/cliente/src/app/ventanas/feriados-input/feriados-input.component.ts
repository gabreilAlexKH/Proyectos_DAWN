import { Component } from '@angular/core';

@Component({
  selector: 'app-feriados-input',
  templateUrl: './feriados-input.component.html',
  styleUrls: ['./feriados-input.component.css']
})
export class FeriadosInputComponent {

  pais:string = "";
  meses:string = "01-12";

  onSelectedPais(pais:string) {
    this.pais = pais;

  }

  onSelectedMeses(meses:string) {
    this.meses = meses;

  }

}
