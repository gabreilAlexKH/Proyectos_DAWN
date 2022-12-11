import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCommonModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


import { InicioComponent } from './ventanas/inicio/inicio.component';
import { FeriadosInputComponent } from './ventanas/feriados-input/feriados-input.component';
import { FeriadosPaisComponent } from './ventanas/feriados-pais/feriados-pais.component';
import { PaisesDiaComponent } from './ventanas/paises-dia/paises-dia.component';
import { MesesFormComponent } from './componentes/meses-form/meses-form.component';
import { TablaFeriadosComponent } from './componentes/tabla-feriados/tabla-feriados.component';
import { LineasFeriadosComponent } from './componentes/lineas-feriados/lineas-feriados.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FeriadosInputComponent,
    FeriadosPaisComponent,
    PaisesDiaComponent,
    MesesFormComponent,
    TablaFeriadosComponent,
    LineasFeriadosComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
