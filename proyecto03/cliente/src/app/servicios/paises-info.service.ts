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



  /**
   * Devulve un observer compuesto de una respuesta por cada pais ingresado en el conjunto de codigos ISO 2
   * Cada repuesta se compone de tres repuestas con:
   *  1. Get a https://api.countrystatecity.in/v1/countries para el pais codigo ISO 2 del set
   *  3. Get a https://api.countrystatecity.in/v1//${codigo}/states para el pais codigo ISO 2 del set
   *  2. Get a https://api.countrystatecity.in/v1/countries/${codigo}/citiespara el pais codigo ISO 2 del set
   * @param codigos
   * @returns
   */
  public fetchInfoPaises(codigos:Set<string>){

    let fetches:Observable<any>[] = [];

    for (const codigo of codigos) {

      fetches.push(this.infoService.fetchPaisAllInfo(codigo));

    }

    let obserPais = forkJoin(fetches);

    return obserPais;

  }


  /**
   * Prosesa la repuesta de fetchInfoPaises(codigos:Set<string>) a un areglo con de PaisInfo de los paises que se pasaran a fetchInfoPaises
   * @param respuestas
   * @returns
   */
  procesFetch(respuestas:any):Array<PaisInfo>{

    let paisesDia:PaisInfo[] = [];

    for (const res  of respuestas) {

      let info:PaisInfo = {
        iso2: "",
        name: "",
        phonecode: "",
        capital: '',
        currency: '',
        nCiudades: 0,
        nEstados: 0
      };

      let respuestaCoun:Country = res[0] as Country;

      info.iso2 = respuestaCoun.iso2 ? respuestaCoun.iso2 : "None";
      info.name = respuestaCoun.name ? respuestaCoun.name : "None";
      info.phonecode = respuestaCoun.phonecode ? respuestaCoun.phonecode : "None";
      info.capital = respuestaCoun.capital ? respuestaCoun.capital : "None";
      info.currency = respuestaCoun.currency ? respuestaCoun.currency : "None";

      let estados:State[] = res[1] as Array<State>;
      info.nEstados = estados.length ? estados.length : 0;

      let ciudades:City[] = res[2] as Array<City>;
      info.nCiudades = ciudades.length ? ciudades.length : 0 ;

      paisesDia.push(info);

    }

    return paisesDia;

  }


}




