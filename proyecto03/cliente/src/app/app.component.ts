import { Component } from '@angular/core';
import {PaisesInfoService } from './servicios/paises-info.service';
import {CodigosPaisesService} from './servicios/codigos-paises.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private infosService: PaisesInfoService , private codigoService:CodigosPaisesService) {

  }
  title = 'cliente';


  menu(enlaces: any) {
    enlaces.toggle()
  }

  ngOnInit(){
    //this.fetchPaisInfo();
  }

  private async fetchPaisInfo(){

    let codPaises:Set<string> = this.codigoService.getRandomSample(10);

    this.infosService.fetchInfoPaises(codPaises);

    const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

    await sleep(4000);
  }

}
