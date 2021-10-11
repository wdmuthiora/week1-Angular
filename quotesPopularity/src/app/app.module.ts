import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailedComponent } from './quote-detailed/quote-detailed.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { HighlightLeadDirective } from './highlight-lead.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailedComponent,
    QuoteFormComponent,
    HighlightLeadDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
