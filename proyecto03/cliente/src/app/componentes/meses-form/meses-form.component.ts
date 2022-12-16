import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-meses-form',
  templateUrl: './meses-form.component.html',
  styleUrls: ['./meses-form.component.css']
})
export class MesesFormComponent {

  mesInit:string = '01';
  mesFin:string  = '12';
  @Output() onSelected = new EventEmitter<any>();

  constructor(){
  }

  onSelectedMeses(){
    console.log(this.mesInit +"-"+ this.mesFin);
    if(this.mesInit>this.mesFin){
      this.onSelected.emit("");
    }else{
      this.onSelected.emit(this.mesInit +"-"+ this.mesFin);
    }
  }
}
