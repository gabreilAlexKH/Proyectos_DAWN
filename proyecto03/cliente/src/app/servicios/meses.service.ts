import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesesService {

  constructor() { }

  private mesesTodos:string[] = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dis"];

  /**
   * Devuleve una lista de meses en el rengo ingresado
   * @param mesIncio
   * @param mesFinal
   * @returns
   */
  getMesesRange(mesIncio:number, mesFinal:number){
    return this.mesesTodos.slice(mesIncio - 1, mesFinal);
}
}
