import { Injectable } from '@angular/core';
import { WordFrequencyCompareHelper } from './helpers/word-frequency-compare/word-frequency-compare.helper';
import { WordFrequencyHelper } from './helpers/word-frequency/word-frequency.helper';
import { WordFrequency } from './model/word-frequency.model';

@Injectable()
export class WordFrequencyAnalyzerService {

  private textCache: string | undefined;
  private wordsFrequencyCache: WordFrequency[] = [];

  calculateHighestFrequency(text: string): number {
    const wordsFrequencies = this.wordsFrequency(text);
    const highestFrequencyReducer = (highestFrequency: number, wordFrequency: WordFrequency) =>
      (highestFrequency < wordFrequency.getFrequency() ? wordFrequency.getFrequency() : highestFrequency);

    return wordsFrequencies.reduce(highestFrequencyReducer, 0);
  }

  calculateFrequencyForWord(text: string, wordToCount: string): number {
    let frequency = 0;

    if (text && wordToCount) {
      const wordsFrequencies = this.wordsFrequency(text);
      const wordFrequency = wordsFrequencies.find((word: WordFrequency) => word.getWord() === wordToCount.toLowerCase());

      frequency = wordFrequency ? wordFrequency.getFrequency() : 0;
    }

    return frequency;
  }

  calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {

    let mostFrequentWords: WordFrequency[] = [];

    if (text && n > 0) {
      const wordsFrequenciesSorted = this.wordsFrequency(text).sort(WordFrequencyCompareHelper.compare);
      mostFrequentWords = wordsFrequenciesSorted.slice(0, n);
    }

    return mostFrequentWords;
  }

  private wordsFrequency(text: string): WordFrequency[] {
    if (text !== this.textCache) {
      this.textCache = text;
      this.wordsFrequencyCache = WordFrequencyHelper.wordsFrequencies(text);
    }

    return this.wordsFrequencyCache;
  }

}
