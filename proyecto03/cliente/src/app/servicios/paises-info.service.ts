import { Injectable } from '@angular/core';
import {PaisInfoService} from './pais-info.service';
import {CodigosPaisesService} from './codigos-paises.service'
import {PaisInfo} from '../interfases/pais-info'
import {Country} from '../interfases/country';
import {State} from '@popperjs/core';
import {City} from '../interfases/city';

@Injectable({
  providedIn: 'root'
})
export class PaisesInfoService {

  constructor(private infoService: PaisInfoService , private codigoService:CodigosPaisesService) { }


  static paisesDia:PaisInfo[] = [];


  public fetchInfoPaises(codigos:Set<string> ){

    for (const codigo of codigos) {

      this.infoService.fetchPaisAllInfo(codigo).subscribe( (res) => {

        let info:PaisInfo = {
          alphaCode: codigo,
          name: "",
          telCode: "",
          capital: '',
          moneda: '',
          nCiudades: 0,
          nEstados: 0
        };

        let respuestaCoun:Country = res[0] as Country;

        info.name = respuestaCoun.name;
        info.telCode = respuestaCoun.phonecode;
        info.capital = respuestaCoun.capital;
        info.moneda = respuestaCoun.currency;

        let estados:State[] = res[1] as Array<State>;
        info.nEstados = estados.length;

        let ciudades:City[] = res[2] as Array<City>;
        info.nCiudades = ciudades.length;

        PaisesInfoService.paisesDia.push(info);

      });

    }
  }
}




