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
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { InicioComponent } from './ventanas/inicio/inicio.component';
import { FeriadosInputComponent } from './ventanas/feriados-input/feriados-input.component';
import { FeriadosPaisComponent } from './ventanas/feriados-pais/feriados-pais.component';
import { PaisesDiaComponent } from './ventanas/paises-dia/paises-dia.component';
import { MesesFormComponent } from './componentes/meses-form/meses-form.component';
import { LineasFeriadosComponent } from './componentes/lineas-feriados/lineas-feriados.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { PaisFormComponent } from './componentes/pais-form/pais-form.component';
import { PaisCardComponent } from './componentes/pais-card/pais-card.component';
import { ComparacionInputComponent } from './ventanas/comparacion-input/comparacion-input.component';
import { ComparacionPaisesComponent } from './ventanas/comparacion-paises/comparacion-paises.component';
import { DataTableComponent } from './componentes/data-table/data-table.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MainComponent } from './ventanas/main/main.component';
import { RevbarComponent } from './componentes/revbar/revbar.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FeriadosInputComponent,
    FeriadosPaisComponent,
    PaisesDiaComponent,
    MesesFormComponent,
    LineasFeriadosComponent,
    NavBarComponent,
    PaisFormComponent,
    PaisCardComponent,
    ComparacionInputComponent,
    ComparacionPaisesComponent,
    DataTableComponent,
    ToolbarComponent,
    MainComponent,
    RevbarComponent,

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
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
