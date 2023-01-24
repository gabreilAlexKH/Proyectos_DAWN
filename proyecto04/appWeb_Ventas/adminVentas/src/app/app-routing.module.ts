import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './ventanas/inicio/inicio.component';
import { SalesAllComponent } from './ventanas/sales-all/sales-all.component';
import { SalesShipedComponent } from './ventanas/sales-shiped/sales-shiped.component';

const routes: Routes = [
  {path: "clientes", component: InicioComponent},
  {path: "sales/shipped/:customerNumber", component: SalesShipedComponent},
  {path: "sales", component: SalesAllComponent},
  {path: "**", redirectTo: "clientes"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
