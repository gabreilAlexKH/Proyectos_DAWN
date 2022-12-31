import { Component } from '@angular/core';
import {PaisesInfoService } from './servicios/paises-info.service';
import {CodigosPaisesService} from './servicios/codigos-paises.service'
import { PaisInfo } from './interfases/pais-info';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private infosService: PaisesInfoService , private codigoService:CodigosPaisesService) {

  }


  menu(enlaces: any) {
    enlaces.toggle()
  }

  ngOnInit(){

    this.fetchPaisInfo();

  }

  private async fetchPaisInfo(){


    let codPaisesDia = JSON.parse(localStorage.getItem("codPaisesDia")!) as string[];

    if(!codPaisesDia){
      codPaisesDia = this.codigoService.getRandomSample(10);
      localStorage.setItem( "codPaisesDia" ,  JSON.stringify(codPaisesDia));
    }


    let paisesDiaInfo = JSON.parse(localStorage.getItem("paisesDiaInfo")!) as PaisInfo;

    const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));


    if(!paisesDiaInfo){

      this.infosService.fetchInfoPaises(new Set<string>(codPaisesDia)).subscribe( (respuestas) => {

        let paisesDia:PaisInfo[] = this.infosService.procesFetch(respuestas);
        localStorage.setItem( "paisesDiaInfo" , JSON.stringify(paisesDia));

      });
    }
  }

}
