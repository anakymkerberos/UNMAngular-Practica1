import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { Servicio1Service } from '../app/servicios/servicio1.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumidorComponent
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
