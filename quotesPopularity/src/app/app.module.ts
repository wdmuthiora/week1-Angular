import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

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
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [QuoteService],
  bootstrap: [AppComponent],
})
  
export class AppModule {}
