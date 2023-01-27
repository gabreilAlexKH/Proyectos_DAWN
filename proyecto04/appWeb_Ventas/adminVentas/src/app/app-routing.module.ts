import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './ventanas/inicio/inicio.component';
import { SalesAllComponent } from './ventanas/sales-all/sales-all.component';
import { SalesShipedComponent } from './ventanas/sales-shiped/sales-shiped.component';
import { ClientesComponent } from './ventanas/clientes/clientes.component';
const routes: Routes = [
  {path:"main" , component: InicioComponent,
  children:[
    {path: "clientes", component: ClientesComponent},
    {path: "sales", component: SalesAllComponent},
    { path: "**", redirectTo:"clientes" },
  ]},
  {path: "sales/shipped/:customerNumber", component: SalesShipedComponent},
  {path: "**", redirectTo: "main"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
