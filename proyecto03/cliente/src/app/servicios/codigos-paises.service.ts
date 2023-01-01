import { Injectable } from '@angular/core';
import paises from "../_files/paises.json";
import {PaisAlpha2} from '../interfases/pais-alpha2'


@Injectable({
  providedIn: 'root'
})


export class CodigosPaisesService {

  static paisCod = new Map<string, string>();

  constructor() {

    let jsonPaises = paises as Array<PaisAlpha2>;

    for (const entry of jsonPaises) {
      CodigosPaisesService.paisCod.set(entry.codeAlpha2 , entry.name);
    }
  }

  /**
   * Devuleve una lista de los codigos ISO 3166-1 alfa-2 de los paises diponibles en la aplicasion
   * @returns
   */
  obtenerPaises(){
    return paises;
  }


  /**
   * Devuelve el nombre del pais ingresado segun su codigo ISO 3166-1 alfa-2
   * @param code
   * @returns
   */
  getPaisByCode(code:string){
    return CodigosPaisesService.paisCod.get(code) ;
  }

  /**
   * Devuelve una lista de nombres de paises segun las lista de codigos ISO 3166-1 alfa-2
   * @param codes
   * @returns
   */
  getPaisesByCode(codes:string[]){

    let paises:string[] = [];

    for (const code of codes) {

      paises.push(CodigosPaisesService.paisCod.get(code) as string);
    }

    return paises;
  }

  /**
   * Devuelve un conjunto de n codigos ISO 3166-1 alfa-2
   * @param n
   * @returns
   */
  getRandomSample(n:number):string[]{

    let keys:string[] = Array.from(CodigosPaisesService.paisCod.keys()) as Array<string>;
    let keySet:Set<string>  = new Set<string> ();

    while(keySet.size < n){
      let random = Math.floor(Math.random() * keys.length);
      keySet.add(keys[random]);
    }

    return Array.from(keySet);
  }




}
