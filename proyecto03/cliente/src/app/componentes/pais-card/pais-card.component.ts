import { Component, Input } from '@angular/core';
import { PaisInfo } from '../../interfases/pais-info';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.css']
})
export class PaisCardComponent {

  @Input() infoPais: PaisInfo = {
    alphaCode: "GB",
    name: "Default",
    telCode: "00",
    capital: 'Default',
    moneda: 'DD',
    nCiudades: 0,
    nEstados: 0
  };

  constructor(private router: Router) {
  }


  goToResponse() {

    let ruta: string = `feriadosPais/${this.infoPais.alphaCode}/01/12`;
    this.router.navigate([ruta]);
  }


}
