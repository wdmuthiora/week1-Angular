import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailedComponent } from './quote-detailed/quote-detailed.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { HighlightLeadDirective } from './highlight-lead.directive';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { TimeLapsedPipe } from './time-lapsed.pipe';
import { QuoteService } from './quote-service/quote.service';
import { QuoteRequestService } from './quote-http/quote-request.service';



@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailedComponent,
    QuoteFormComponent,
    HighlightLeadDirective,
    QuoteDisplayComponent,
    TimeLapsedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [QuoteService, QuoteRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
