import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './ventanas/inicio/inicio.component';
import { SalesAllComponent } from './ventanas/sales-all/sales-all.component';
import { SalesShipedComponent } from './ventanas/sales-shiped/sales-shiped.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "sales/shipped/:customerNumber", component: SalesShipedComponent},
  {path: "sales/:customerNumber", component: SalesAllComponent},
  {path: "*", redirectTo: "inicio"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
