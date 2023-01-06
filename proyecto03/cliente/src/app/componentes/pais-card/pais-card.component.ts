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
    iso2: "GB",
    name: "Default",
    phonecode: "00",
    capital: 'Default',
    currency: 'DD',
    nCiudades: 0,
    nEstados: 0
  };

  constructor(private router: Router) {
  }


  /**
   * Redirigue la pagina a la info de feriados del pais en la carta
   */
  goToResponse() {

    let ruta: string = `feriadosPais/${this.infoPais.iso2}/01/12`;
    this.router.navigate([ruta]);
  }


}
