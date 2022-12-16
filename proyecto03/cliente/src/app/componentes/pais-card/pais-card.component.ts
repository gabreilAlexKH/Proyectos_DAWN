import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.css']
})
export class PaisCardComponent {

  @Input() alpha2Pais:string = "";


}
