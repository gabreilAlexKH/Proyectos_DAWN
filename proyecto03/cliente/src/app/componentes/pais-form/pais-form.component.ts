import { Component, EventEmitter, Output } from '@angular/core';
import { CodigosPaisesService } from '../../servicios/codigos-paises.service'
import { PaisAlpha2 } from '../../interfases/pais-alpha2'

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent {

  protected pais: string = "";
  protected paises: PaisAlpha2[] = [];

  @Output() onSelected = new EventEmitter<any>();

  constructor(private codPaisService: CodigosPaisesService) {
    this.paises = this.codPaisService.obtenerPaises() as Array<PaisAlpha2>;
  }

  /**
   * Emite un evento al padre con el codigo ISO 3166-1 alfa-2 del pais selecionado
   * @param pais
   */
  onSelectedPais(pais: any) {

    this.onSelected.emit(pais);
  }
}
