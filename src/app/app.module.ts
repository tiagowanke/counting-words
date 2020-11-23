import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordFrequencyAnalyzerModule } from './word-frequency-analyzer/word-frequency-analyzer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WordFrequencyAnalyzerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
