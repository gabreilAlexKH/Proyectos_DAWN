import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feriados-input',
  templateUrl: './feriados-input.component.html',
  styleUrls: ['./feriados-input.component.css']
})
export class FeriadosInputComponent {

  pais:string = "";
  mesInit:string = '01';
  mesFin:string  = '12';

  constructor(private router: Router) {

  }

  onSelectedPais(pais:string) {
    this.pais = pais;
  }

  onSelectedMeses(mesesStr:string) {

    let meses = Array<string>();
    meses = mesesStr.split("-");

    this.mesInit = meses[0];
    this.mesFin = meses[1];
  }



  goToResponse(){

    if(this.pais!="" && this.mesInit<this.mesFin){
      let ruta:string = `feriadosPais/${this.pais}/${this.mesInit}/${this.mesFin}`;
      this.router.navigate([ruta]);
    }
  }

}
