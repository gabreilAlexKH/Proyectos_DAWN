import { Component } from '@angular/core';
import {CodigosPaisesService} from '../../servicios/codigos-paises.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-comparacion-input',
  templateUrl: './comparacion-input.component.html',
  styleUrls: ['./comparacion-input.component.css']
})
export class ComparacionInputComponent {

  constructor(private codPaisService:CodigosPaisesService , private router: Router){

  }

  paisesCodes:Set<string> = new Set<string>();
  mesInit:string = '01';
  mesFin:string  = '12';


  onSelectedPais(pais:string) {

    if(this.paisesCodes.size<10){
      this.paisesCodes.add(pais);
    }
  }

  getPaisName(code:any){
    return this.codPaisService.getPaisByCode(code as string);
  }

  onSelectedMeses(mesesStr:string) {

    let meses = Array<string>();
    meses = mesesStr.split("-");

    this.mesInit = meses[0];
    this.mesFin = meses[1];
  }



  goToResponse(){

    if(this.paisesCodes.size>0  && this.mesInit<this.mesFin){

      let arregloCod:string[] = Array.from(this.paisesCodes);
      let paisesStr:string=arregloCod.join("-");

      let ruta:string = `comparacionFeriados/${paisesStr}/${this.mesInit}/${this.mesFin}`;
      this.router.navigate([ruta]);
    }
  }

}
