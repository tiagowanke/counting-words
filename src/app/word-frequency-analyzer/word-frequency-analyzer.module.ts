import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WordFrequencyAnalyzerService} from './word-frequency-analyzer.service';
import {WordFrequencyAnalyzerComponent} from './word-frequency-analyzer/word-frequency-analyzer.component';

@NgModule({
  declarations: [
    WordFrequencyAnalyzerComponent
  ],
  providers: [
    WordFrequencyAnalyzerService
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WordFrequencyAnalyzerComponent
  ]
})
export class WordFrequencyAnalyzerModule {}
