import { Component } from '@angular/core';
import { Cliente } from 'src/app/interfases/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  constructor(private servicioCliente:ClientesService , private ruteador:Router ){}

  displayedColumns: string[] = ['customerNumber', 'customerName', 'phone', 'city' , 'state', 'country' , 'postalCode' , 'boton'];
  dataSource:Cliente[] = [];

  ngOnInit(){

    this.servicioCliente.fetchClientes().subscribe( (respuesta)=>{

      this.dataSource = respuesta as Cliente[];

    });


  }

  protected checkSalesShipped(custumerNumber:number){

    this.ruteador.navigate(["sales/shipped/" + custumerNumber]);

  }

  protected checkSalesAll(custumerNumber:number){

    this.ruteador.navigate(["sales/" + custumerNumber]);

  }

}
