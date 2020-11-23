import {WordFrequency} from '../../model/word-frequency.model';
import {WordFrequencyCompareHelper} from './word-frequency-compare.helper';

describe('WordFrequencyCompare', () => {

  describe('compare', () => {

    let word1: WordFrequency;
    let word2: WordFrequency;

    describe('when first word has a higher frequency than the second one', () => {

      beforeEach(() => {
        word1 = new WordFrequency('word', 2);
        word2 = new WordFrequency('word', 1);
      });

      it('should return -1', () => {
        expect(WordFrequencyCompareHelper.compare(word1, word2)).toBe(-1);
      });

    });

    describe('when first word has a lower frequency than the second one', () => {

      beforeEach(() => {
        word1 = new WordFrequency('word', 1);
        word2 = new WordFrequency('word', 2);
      });

      it('should return 1', () => {
        expect(WordFrequencyCompareHelper.compare(word1, word2)).toBe(1);
      });

    });

    describe('when both words has the same frequency', () => {

      beforeEach(() => {
        word1 = new WordFrequency('word1', 2);
        word2 = new WordFrequency('word2', 2);
      });

      it('should compare alphabetically', () => {
        const localeCompareSpy = spyOn(String.prototype, 'localeCompare').and.returnValue(1);
        expect(WordFrequencyCompareHelper.compare(word1, word2)).toBe(1);
        expect(localeCompareSpy).toHaveBeenCalledWith(word2.getWord());
      });
    });
  });

});
