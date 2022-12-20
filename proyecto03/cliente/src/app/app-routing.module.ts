import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./ventanas/inicio/inicio.component";
import {PaisesDiaComponent} from "./ventanas/paises-dia/paises-dia.component"
import {FeriadosInputComponent} from "./ventanas/feriados-input/feriados-input.component"
import {FeriadosPaisComponent} from "./ventanas/feriados-pais/feriados-pais.component"
import { ComparacionPaisesComponent } from './ventanas/comparacion-paises/comparacion-paises.component';
import {ComparacionInputComponent} from "./ventanas/comparacion-input/comparacion-input.component"


const routes: Routes = [
  {path:"paisDia", component:PaisesDiaComponent},
  {path:"feriadoInput", component:FeriadosInputComponent},
  {path:"feriadosPais/:cod/:init/:fin", component:FeriadosPaisComponent},
  {path:"comparacionFeriados/:codigos/:init/:fin" , component:ComparacionPaisesComponent},
  {path:"compInput", component:ComparacionInputComponent},
  {path:"**", component:InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
