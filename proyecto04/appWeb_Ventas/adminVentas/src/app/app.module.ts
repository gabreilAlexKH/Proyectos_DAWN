import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './ventanas/inicio/inicio.component';
import { SalesShipedComponent } from './ventanas/sales-shiped/sales-shiped.component';
import { SalesAllComponent } from './ventanas/sales-all/sales-all.component';
import { TablaSalesComponent } from './componentes/tabla-sales/tabla-sales.component';
import { RevbarComponent } from './componentes/revbar/revbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import {MatCommonModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClientesComponent } from './ventanas/clientes/clientes.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SalesShipedComponent,
    SalesAllComponent,
    TablaSalesComponent,
    RevbarComponent,
    ToolbarComponent,
    ClientesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
