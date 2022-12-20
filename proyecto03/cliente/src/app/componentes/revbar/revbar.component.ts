import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revbar',
  templateUrl: './revbar.component.html',
  styleUrls: ['./revbar.component.css']
})
export class RevbarComponent {

  @Input() last:string = "";

  constructor(private router: Router) {

  }

  changeRoute() {
    this.router.navigate([this.last]);
  }




}
