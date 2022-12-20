import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./ventanas/inicio/inicio.component";
import { PaisesDiaComponent } from "./ventanas/paises-dia/paises-dia.component"
import { FeriadosInputComponent } from "./ventanas/feriados-input/feriados-input.component"
import { FeriadosPaisComponent } from "./ventanas/feriados-pais/feriados-pais.component"
import { ComparacionPaisesComponent } from './ventanas/comparacion-paises/comparacion-paises.component';
import { ComparacionInputComponent } from "./ventanas/comparacion-input/comparacion-input.component"
import { MainComponent } from './ventanas/main/main.component';


const routes: Routes = [
  {path: "main" , component: MainComponent,
  children: [
    { path: "paisDia", component: PaisesDiaComponent },
    { path: "feriadoInput", component: FeriadosInputComponent },
    { path: "compInput", component: ComparacionInputComponent },
    { path: "inicio", component: InicioComponent },
    { path: "**", redirectTo:"inicio" },
  ]},
  { path: "feriadosPais/:cod/:init/:fin", component: FeriadosPaisComponent },
  { path: "comparacionFeriados/:codigos/:init/:fin", component: ComparacionPaisesComponent },
  {path: "**" , redirectTo:"main"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
