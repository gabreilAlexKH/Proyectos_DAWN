import { Injectable } from '@angular/core';
import paises from "../_files/paises.json";

@Injectable({
  providedIn: 'root'
})
export class CodigosPaisesService {

  constructor() {
  }

  obtenerPaises(){

    return paises;

  }
}
