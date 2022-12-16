import { Component } from '@angular/core';

@Component({
  selector: 'app-comparacion-input',
  templateUrl: './comparacion-input.component.html',
  styleUrls: ['./comparacion-input.component.css']
})
export class ComparacionInputComponent {

  paises = new Set();
  meses:string = "01-12";

  onSelectedPais(pais:string) {

    if(this.paises.size<10){
      this.paises.add(pais);
    }


  }

  onSelectedMeses(meses:string) {
    this.meses = meses;

  }

}
