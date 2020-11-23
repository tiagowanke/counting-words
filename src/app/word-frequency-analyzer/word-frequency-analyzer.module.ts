import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordFrequenciesPipe } from './pipes/word-frequencies.pipe';
import { WordFrequencyAnalyzerService } from './word-frequency-analyzer.service';
import { WordFrequencyAnalyzerComponent } from './word-frequency-analyzer/word-frequency-analyzer.component';

@NgModule({
  declarations: [
    WordFrequencyAnalyzerComponent,
    WordFrequenciesPipe
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
