import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Input() enlaces:any;

  /**
   * Despliega la sidebar pasada como parametro
   */
  menu() {
    this.enlaces.toggle()
  }

}
