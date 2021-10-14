import { Injectable } from '@angular/core';
import { Quote } from '../quote';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
  
export class QuoteRequestService {
  quote: Quote;

  constructor(private http: HttpClient) {
    this.quote = new Quote('', '','', new Date());
  }

  quoteRequest() {
    interface ApiResponse {
      quote: string;
      author: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          (response) => {
            this.quote.quote = response.quote;
            this.quote.author = response.author;

            resolve(response);
          },
          (error) => {
            this.quote.quote = 'Never, never, never give up';
            this.quote.author = 'Winston Churchill';

            reject(error);
          }
        );
    });
    return promise;
  }
}
