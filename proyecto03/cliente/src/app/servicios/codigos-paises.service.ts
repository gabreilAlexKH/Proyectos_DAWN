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

  obtenerPaises(){
    return paises;
  }



  getPaisByCode(code:string){
    return CodigosPaisesService.paisCod.get(code);
  }

  getRandomSample(n:number){

    let keys:string[] = Array.from(CodigosPaisesService.paisCod.keys()) as Array<string>;
    let keySet:Set<string>  = new Set<string> ();

    while(keySet.size < n){
      let random = Math.floor(Math.random() * keys.length);
      keySet.add(keys[random]);
    }

    return keySet;
  }




}
