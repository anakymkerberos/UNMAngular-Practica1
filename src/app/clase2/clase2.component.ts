import { Component, OnInit } from '@angular/core';
import { MiDirectiva1Directive } from '../directivas/mi-directiva1.directive';

@Component({
  selector: 'app-clase2',
  templateUrl: './clase2.component.html',
  styleUrls: ['./clase2.component.css']
})
export class Clase2Component implements OnInit {

  bandera: boolean;

  people: any[] = [
    { name: 'jonas1', age: 35, country: 'USA' }
    , { name: 'jonas2', age: 36, country: 'USA' }
    , { name: 'jonas3', age: 37, country: 'BO' }
    , { name: 'jonas4', age: 38, country: 'BO' }
    , { name: 'jonas5', age: 39, country: 'USA' }
    , { name: 'jonas6', age: 40, country: 'BO' }
    , { name: 'jonas7', age: 41, country: 'USA' }
  ];

  constructor() {
    this.bandera = false;
  }

  ngOnInit() {
  }

  Complementar() {
    this.bandera = !this.bandera;
  }


}
