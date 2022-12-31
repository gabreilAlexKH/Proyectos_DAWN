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

  protected changeRoute(route: string) {
    this.router.navigate([route]);
  }

  protected toFeriadoInput(){
    this.changeRoute("/main/feriadoInput");
  }

  protected toCompInput(){
    this.changeRoute("/main/compInput");
  }

  protected toPaisDia(){
    this.changeRoute("/main/paisDia");
  }



}

