import { Component } from '@angular/core';
import {PaisesInfoService } from '../../servicios/paises-info.service';
import { PaisInfo } from '../../interfases/pais-info';

@Component({
  selector: 'app-paises-dia',
  templateUrl: './paises-dia.component.html',
  styleUrls: ['./paises-dia.component.css']
})


export class PaisesDiaComponent {

  constructor(){}

  paisesDia: Array<PaisInfo>= new Array<PaisInfo>();

  ngOnInit(){
    this.paisesDia = PaisesInfoService.paisesDia;

  }
}
