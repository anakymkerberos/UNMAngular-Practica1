import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../servicios/servicio1.service';
import { QuoteEntity } from '../models/QuoteEntity';


@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {

  quote: QuoteEntity = { author: '', quote: '', loading: true };

  constructor(private servicio1: Servicio1Service) {
  }
  ngOnInit() {
    this.getQuotes();
  }
  getQuotes() {
    this.quote.loading = true;
    return this.servicio1.getQuotes()
      .subscribe(data => {
        this.quote.author = data.author;
        this.quote.quote = data.quote;
        this.quote.loading = false;
        return data;
      });
  }
}
