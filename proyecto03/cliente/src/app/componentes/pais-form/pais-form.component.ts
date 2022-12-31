import { Component, EventEmitter, Output } from '@angular/core';
import {CodigosPaisesService} from '../../servicios/codigos-paises.service'
import {PaisAlpha2} from '../../interfases/pais-alpha2'

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent {
  pais:string = "";

  paises:PaisAlpha2[] =[];

  @Output() onSelected = new EventEmitter<any>();

  constructor(private codPaisService:CodigosPaisesService) {
    this.paises = this.codPaisService.obtenerPaises() as Array<PaisAlpha2>;
  }

  onSelectedPais(pais:any){

    this.onSelected.emit(pais);
  }
}
