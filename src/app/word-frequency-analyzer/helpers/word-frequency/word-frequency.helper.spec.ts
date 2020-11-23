import {WordFrequency} from '../../model/word-frequency.model';
import {WordFrequencyHelper} from './word-frequency.helper';
import {WordSplitterHelper} from '../word-splitter/word-splitter.helper';

describe('WordFrequencyHelper', () => {

  describe('when given text has no words', () => {

    beforeEach(() => {
      spyOn(WordSplitterHelper, 'splitTextInWords').and.returnValue([]);
    });

    it('should return empty array', () => {
      expect(WordFrequencyHelper.wordsFrequencies('')).toEqual([]);
    });
  });

  describe('when given text has words', () => {

    beforeEach(() => {
      spyOn(WordSplitterHelper, 'splitTextInWords').and.returnValue([
        'This', 'is', 'my', 'text', 'wiTH', 'words', 'This', 'is', 'a', 'text', 'with', 'repeated', 'Words'
      ]);
    });

    it('should return array with frequency of every word', () => {
      const wordsFrequencies: WordFrequency[] = [
        new WordFrequency('this', 2),
        new WordFrequency('is', 2),
        new WordFrequency('my', 1),
        new WordFrequency('text', 2),
        new WordFrequency('with', 2),
        new WordFrequency('words', 2),
        new WordFrequency('a', 1),
        new WordFrequency('repeated', 1)
      ];

      expect(WordFrequencyHelper.wordsFrequencies('')).toEqual(wordsFrequencies);
    });

  });



});
