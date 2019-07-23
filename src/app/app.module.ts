import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { Servicio1Service } from '../app/servicios/servicio1.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { Clase2Component } from './clase2/clase2.component';
import { MiDirectiva1Directive } from './directivas/mi-directiva1.directive';



@NgModule({
  declarations: [
    AppComponent,
    ConsumidorComponent,
    Clase2Component,
    MiDirectiva1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Servicio1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
