import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { QuoteService } from '../quote-service/quote.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { quotes } from '../quotesList';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];
  quote!: Quote;

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
    this.quotes.push(quote);
  }

  //delete a quote
  delete(index: number) {
    let toPromptUser = confirm(
      `Are you sure you want to delete this quote ${this.quotes[index].quote}?`
    );
    if (toPromptUser) {
      this.quotes.splice(index, 1);
    }
  }

  constructor(quoteService: QuoteService, private http: HttpClient) {
    this.quotes = quoteService.getQuotes();
  }

  ngOnInit() {

    interface ApiResponse {
      author: string;
      quote: string;
    }

    //incoming object from API//
    this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe((data) => {
      let incomingApiData: any = data;
      var  author = data.author;
      var  quoteText = data.quote;
      

      console.log(incomingApiData)
      quotes.push(incomingApiData);
      console.log(quotes)
      this.quote = new Quote( data.author, data.author, data.quote, new Date() );
    })
  }

}