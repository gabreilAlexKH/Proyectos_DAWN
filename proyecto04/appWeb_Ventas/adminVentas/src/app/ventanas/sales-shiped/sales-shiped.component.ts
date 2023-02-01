import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sales } from 'src/app/interfases/sales'
import { SalesService } from 'src/app/servicios/sales.service';
import { TotalSalesService } from 'src/app/servicios/total-sales.service';

@Component({
  selector: 'app-sales-shiped',
  templateUrl: './sales-shiped.component.html',
  styleUrls: ['./sales-shiped.component.css']
})
export class SalesShipedComponent {

  protected loadinData:boolean = true;
  protected tableData:Sales[]=[];
  protected total: number = 0;
  protected cutomerId:number = 0;
  protected noResponse:boolean = false;
  protected erroMesage:string = "";


  constructor(private route: ActivatedRoute, private salesServ: SalesService , private sumServ: TotalSalesService ) {}

  ngOnInit(){

    this.route.params.subscribe(params =>{

      this.cutomerId =params['customerNumber'];

      this.salesServ.fetchSalesShipped(this.cutomerId).subscribe( (response) => {

        this.tableData = response as Sales[];

        if(this.tableData.length !=0){
          this.sumServ.fetchSumaSales(this.tableData).subscribe( (response) => {

            let res = response as any;

            this.total = Math.round(res["total"] * 100) / 100

          })
          this.loadinData = false;
        }else{
          this.noResponse= true;
          this.erroMesage = "No hay coinisidencias";
        }

      },(error) => {
        this.noResponse= true;
        this.erroMesage = "Error detectado: \n" + error.errorMessege;
    });

    })
  }
}
