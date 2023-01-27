import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class NavbarComponent {



  constructor(private router: Router) {

  }

  /**
   * Cambia la pagina web a la ruta parasada como parametro
   * @param route
   */
  protected changeRoute(route: string) {
    this.router.navigate([route]);
  }

}
