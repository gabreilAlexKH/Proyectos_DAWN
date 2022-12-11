import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./ventanas/inicio/inicio.component";
import {PaisesDiaComponent} from "./ventanas/paises-dia/paises-dia.component"
import {FeriadosInputComponent} from "./ventanas/feriados-input/feriados-input.component"
import {FeriadosPaisComponent} from "./ventanas/feriados-pais/feriados-pais.component"
const routes: Routes = [
  {path:"paisDia", component:PaisesDiaComponent},
  {path:"feriadoInput", component:FeriadosInputComponent},
  {path:"feriadosPais", component:FeriadosPaisComponent},
  {path:"**", component:InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
