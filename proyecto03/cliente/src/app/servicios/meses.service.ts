import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesesService {

  constructor() { }

  private mesesTodos:string[] = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dis"];


  getMesesRange(mesIncio:number, mesFinal:number){
    return this.mesesTodos.slice(mesIncio - 1, mesFinal);
}
}
