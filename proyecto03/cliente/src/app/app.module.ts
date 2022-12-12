import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCommonModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';


import { InicioComponent } from './ventanas/inicio/inicio.component';
import { FeriadosInputComponent } from './ventanas/feriados-input/feriados-input.component';
import { FeriadosPaisComponent } from './ventanas/feriados-pais/feriados-pais.component';
import { PaisesDiaComponent } from './ventanas/paises-dia/paises-dia.component';
import { MesesFormComponent } from './componentes/meses-form/meses-form.component';
import { TablaFeriadosComponent } from './componentes/tabla-feriados/tabla-feriados.component';
import { LineasFeriadosComponent } from './componentes/lineas-feriados/lineas-feriados.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { PaisFormComponent } from './componentes/pais-form/pais-form.component';

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
    NavBarComponent,
    PaisFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCommonModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
