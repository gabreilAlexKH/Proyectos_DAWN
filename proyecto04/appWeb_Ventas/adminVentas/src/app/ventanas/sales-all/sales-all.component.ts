import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sales } from 'src/app/interfases/sales'
import { SalesService } from 'src/app/servicios/sales.service';


@Component({
  selector: 'app-sales-all',
  templateUrl: './sales-all.component.html',
  styleUrls: ['./sales-all.component.css']
})
export class SalesAllComponent {

  protected loadinData:boolean = true;
  protected tableData:Sales[]=[];
  protected total: number = 0;
  protected cutomerId:number = 0;


  constructor(private route: ActivatedRoute, private salesServ: SalesService ) {}

  ngOnInit(){

      this.salesServ.fetchSales().subscribe( (response) => {
        this.tableData = response as Sales[];
        console.log(this.tableData );
        this.loadinData = false;

      });

  }

}
