import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Servicio1Service } from './servicios/servicio1.service';

import { ConsumidorComponent } from './consumidor/consumidor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ConsumidorComponent'}
  , {path: 'Consumidor', component: ConsumidorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
