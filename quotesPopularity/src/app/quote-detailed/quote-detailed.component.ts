import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detailed',
  templateUrl: './quote-detailed.component.html',
  styleUrls: ['./quote-detailed.component.css'],
})
export class QuoteDetailedComponent implements OnInit {
  @Input() quote!: Quote;
  constructor() {}

  ngOnInit(): void {}
}
