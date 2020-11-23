import {WordFrequency} from '../../model/word-frequency.model';
import {WordSplitterHelper} from '../word-splitter/word-splitter.helper';

export class WordFrequencyHelper {

  /**
   * @returns List of all words (in lower case) and their frequencies in the given text.
   * To count the frequency of a word a lower case comparison is used.
   * Example: 'This' and 'this' is the same word so has frequency 2
   */
  static wordsFrequencies(text: string): WordFrequency[] {
    const wordsFrequencies: WordFrequency[] = [];
    const wordsInLowerLetters = WordSplitterHelper.splitTextInWords(text).map((word) => word.toLowerCase());
    const countFrequency = (words: string[], word: string) => words.reduce((total, value) => (value === word ?  total + 1 : total), 0);

    wordsInLowerLetters.forEach((lowerCaseWord: string) => {
      const notYetCalculated = wordsFrequencies
        .find((wordFrequency: WordFrequency) => wordFrequency.getWord() === lowerCaseWord) === undefined;

      if (notYetCalculated) {
        wordsFrequencies.push(new WordFrequency(lowerCaseWord, countFrequency(wordsInLowerLetters, lowerCaseWord)));
      }
    });

    return wordsFrequencies;
  }

}
