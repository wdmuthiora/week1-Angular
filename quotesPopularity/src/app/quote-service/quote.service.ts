import { Injectable } from '@angular/core';
import { quotes } from '../quotesList';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  getQuotes() {
    return quotes;
  }
  constructor() { }
}
