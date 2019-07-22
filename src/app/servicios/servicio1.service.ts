import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANTES } from '../config/app-constants';

@Injectable({
  providedIn: 'root'
})


export class Servicio1Service {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    return (this.http.get( CONSTANTES.apiURL));
  }
}
