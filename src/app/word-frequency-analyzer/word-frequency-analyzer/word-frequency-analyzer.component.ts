import { Component } from '@angular/core';
import {WordFrequency} from '../model/word-frequency.model';
import { WordFrequencyAnalyzerService } from '../word-frequency-analyzer.service';

@Component({
  selector: 'app-word-frequency-analyzer',
  templateUrl: './word-frequency-analyzer.component.html',
  styleUrls: ['./word-frequency-analyzer.component.scss']
})
export class WordFrequencyAnalyzerComponent {

  text: string | undefined;
  word: string | undefined;
  n: number | undefined;

  highestFrequency: number | undefined;
  frequencyForWord: number | undefined;
  mostFrequentNWord: WordFrequency[] | undefined;

  constructor(private wordFrequencyAnalyzerService: WordFrequencyAnalyzerService) { }

  calculate(): void {
    const textToCalculate = this.text ? this.text : '';
    this.highestFrequency = this.wordFrequencyAnalyzerService.calculateHighestFrequency(textToCalculate);
    this.frequencyForWord = this.wordFrequencyAnalyzerService.calculateFrequencyForWord(textToCalculate, this.word ? this.word : '');
    this.mostFrequentNWord = this.wordFrequencyAnalyzerService.calculateMostFrequentNWords(textToCalculate, this.n ? this.n : 0);
  }

}
