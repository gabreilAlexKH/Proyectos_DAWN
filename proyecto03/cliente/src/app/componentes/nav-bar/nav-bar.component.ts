import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

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
