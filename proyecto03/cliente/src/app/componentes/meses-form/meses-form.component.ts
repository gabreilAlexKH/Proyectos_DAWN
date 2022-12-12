import { Component } from '@angular/core';

@Component({
  selector: 'app-meses-form',
  templateUrl: './meses-form.component.html',
  styleUrls: ['./meses-form.component.css']
})
export class MesesFormComponent {

  mesInit:string = '01';
  mesFin:string  = '12';
}
