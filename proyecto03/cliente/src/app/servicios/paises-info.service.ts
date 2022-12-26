import { Injectable } from '@angular/core';
import {PaisInfoService} from './pais-info.service';
import {CodigosPaisesService} from './codigos-paises.service'
import {PaisInfo} from '../interfases/pais-info'
import {Country} from '../interfases/country';
import {State} from '@popperjs/core';
import {City} from '../interfases/city';
import { forkJoin, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesInfoService {

  constructor(private infoService: PaisInfoService , private codigoService:CodigosPaisesService) { }




  public fetchInfoPaises(codigos:Set<string>){

    let fetches:Observable<any>[] = [];

    for (const codigo of codigos) {

      fetches.push(this.infoService.fetchPaisAllInfo(codigo));

    }

    let obserPais = forkJoin(fetches);

    return obserPais;

  }


  procesFetch(respuestas:any):Array<PaisInfo>{

    let paisesDia:PaisInfo[] = [];

    for (const res  of respuestas) {

      let info:PaisInfo = {
        alphaCode: "",
        name: "",
        telCode: "",
        capital: '',
        moneda: '',
        nCiudades: 0,
        nEstados: 0
      };

      let respuestaCoun:Country = res[0] as Country;

      info.alphaCode = respuestaCoun.iso2;
      info.name = respuestaCoun.name;
      info.telCode = respuestaCoun.phonecode;
      info.capital = respuestaCoun.capital;
      info.moneda = respuestaCoun.currency;

      let estados:State[] = res[1] as Array<State>;
      info.nEstados = estados.length;

      let ciudades:City[] = res[2] as Array<City>;
      info.nCiudades = ciudades.length;

      paisesDia.push(info);

    }

    return paisesDia;

  }


}




