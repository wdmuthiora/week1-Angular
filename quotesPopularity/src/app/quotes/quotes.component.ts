import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  

  //increment the upvote
  upVote(index: number) {
    this.quotes[index].upVote += 1;
  }

  //increment the downvote
  downVote(index: number) {
    this.quotes[index].downVote += 1;
  }

  //add a quote
  addNewQuote(quote: Quote) {
    // quote.author = this.addQuote.author;
    // quote.quoteText = this.addQuote.quoteText;
    this.quotes.push(quote);
  }

  //delete a quote
  delete(index: number) {
    let toPromptUser = confirm(
      `Are you sure you want to delete this quote ${this.quotes[index].quoteText}?`
    );
    if (toPromptUser) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
