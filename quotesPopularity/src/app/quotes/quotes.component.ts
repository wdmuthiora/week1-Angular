import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Donna', 'Quote number one'),
    new Quote('Daisy', 'Quote number two'),
    new Quote('Dennis', 'Quote number three')
  ];

  constructor() {}

  ngOnInit(): void {}
}
