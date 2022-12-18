import { Component } from '@angular/core';
import {CodigosPaisesService} from '../../servicios/codigos-paises.service'


@Component({
  selector: 'app-comparacion-input',
  templateUrl: './comparacion-input.component.html',
  styleUrls: ['./comparacion-input.component.css']
})
export class ComparacionInputComponent {

  constructor(private codPaisService:CodigosPaisesService){

  }

  paisesCodes = new Set();
  meses:string = "01-12";

  onSelectedPais(pais:string) {

    if(this.paisesCodes.size<10){
      this.paisesCodes.add(pais);
    }
  }

  getPaisName(code:any){
    return this.codPaisService.getPaisByCode(code as string);
  }

  onSelectedMeses(meses:string) {
    this.meses = meses;

  }

}
