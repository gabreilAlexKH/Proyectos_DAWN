import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodigosPaisesService } from 'src/app/servicios/codigos-paises.service';

@Component({
  selector: 'app-feriados-pais',
  templateUrl: './feriados-pais.component.html',
  styleUrls: ['./feriados-pais.component.css']
})


export class FeriadosPaisComponent {

  paisCod:string = "";
  paisName:string =""
  mesInit:string = '';
  mesFin:string  = '';

  constructor(private route: ActivatedRoute , private codigos: CodigosPaisesService){

  }

  ngOnInit(){

    this.route.params.subscribe(params =>{

      this.paisCod = params['cod'];
      this.paisName = this.codigos.getPaisByCode(this.paisCod) as string;
      this.mesInit = params['init'];
      this.mesFin = params['fin'];

      console.log(this.paisCod + " " + this.mesInit + "-" + this.mesFin);

    })

    /*
    let table
    const datatablesSimple = document.getElementById('tablaFeriadoPais');
    if (datatablesSimple) {
      table = new simpleDatatables.DataTable(datatablesSimple);
    }
    return table
    */
  }
}


