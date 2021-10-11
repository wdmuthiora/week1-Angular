import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    { author:'Donna', quoteText: 'Quote number one'},
    { author:'Daisy', quoteText: 'Quote number two'},
    { author:'Dennis', quoteText: 'Quote number three'},
  ];

  constructor() {}

  ngOnInit(): void {}
}
