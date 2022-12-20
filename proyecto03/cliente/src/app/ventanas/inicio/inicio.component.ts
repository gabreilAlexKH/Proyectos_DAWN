import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {

  }

  changeRoute(route: string) {
    this.router.navigate([route]);
  }

  toFeriadoInput(){
    this.changeRoute("/main/feriadoInput");
  }

  toCompInput(){
    this.changeRoute("/main/compInput");
  }

  toPaisDia(){
    this.changeRoute("/main/paisDia");
  }



}

