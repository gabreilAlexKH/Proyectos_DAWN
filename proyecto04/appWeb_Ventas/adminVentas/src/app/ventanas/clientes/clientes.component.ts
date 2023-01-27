import { Component } from '@angular/core';
import { Cliente } from 'src/app/interfases/cliente';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  constructor(private servicioCliente: ClientesService, private ruteador: Router) { }

  displayedColumns: string[] = ['customerNumber', 'customerName', 'phone', 'city', 'state', 'country', 'postalCode', 'boton'];
  dataSource: Cliente[] = [];

  ngOnInit() {

    let clientes: any = localStorage.getItem("clientes");

    if (!clientes) {

      this.servicioCliente.fetchClientes().subscribe((respuesta) => {

        this.dataSource = respuesta as Cliente[];
        localStorage.setItem("clientes", JSON.stringify(this.dataSource));

      });
    } else {

      this.dataSource = JSON.parse(clientes) as Cliente[];
    }

  }

  protected checkSalesShipped(custumerNumber: number) {

    this.ruteador.navigate(["sales/shipped/" + custumerNumber]);

  }

  protected checkSalesAll() {

    this.ruteador.navigate(["sales"]);

  }

}
