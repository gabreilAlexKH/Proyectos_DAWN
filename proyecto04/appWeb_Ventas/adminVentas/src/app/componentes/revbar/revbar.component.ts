import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-revbar',
  templateUrl: './revbar.component.html',
  styleUrls: ['./revbar.component.css']
})
export class RevbarComponent {

  @Input() returnPath:string = "main/clientes"

  constructor(private router:Router) {

  }


  public return(){
    this.router.navigate([this.returnPath]);
  }

}
