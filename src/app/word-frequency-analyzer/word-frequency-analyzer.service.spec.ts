import { TestBed } from '@angular/core/testing';
import { WordFrequencyCompareHelper } from './helpers/word-frequency-compare/word-frequency-compare.helper';
import { WordFrequency } from './model/word-frequency.model';

import { WordFrequencyAnalyzerService } from './word-frequency-analyzer.service';
import { WordFrequencyHelper } from './helpers/word-frequency/word-frequency.helper';


describe('WordFrequencyAnalyzerService', () => {
  let service: WordFrequencyAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WordFrequencyAnalyzerService
      ]
    });
    service = TestBed.inject(WordFrequencyAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#calculateHighestFrequency()', () => {

    describe('when text is empty', () => {

      it('should return 0', () => {
        expect(service.calculateHighestFrequency('')).toBe(0);
      });
    });

    describe('when text is not empty', () => {

      describe('and there is only one word with the highest frequency', () => {

        it('should return the frequency', () => {
          const text = 'this is a text with only one word with highest frequency';
          spyOn(WordFrequencyHelper, 'wordsFrequencies').and.returnValue([
            new WordFrequency('this', 1),
            new WordFrequency('is', 2),
            new WordFrequency('a', 4),
            new WordFrequency('text', 12),
            new WordFrequency('word', 1)
          ]);
          expect(service.calculateHighestFrequency(text)).toBe(12);
        });
      });

      describe('and there are multiple words with the highest frequency', () => {
        it('should return the frequency', () => {
          const text = 'this is a text with only one word with highest frequency';
          spyOn(WordFrequencyHelper, 'wordsFrequencies').and.returnValue([
            new WordFrequency('this', 1),
            new WordFrequency('is', 8),
            new WordFrequency('a', 4),
            new WordFrequency('text', 8),
            new WordFrequency('word', 1)
          ]);
          expect(service.calculateHighestFrequency(text)).toBe(8);
        });
      });
    });
  });

  describe('#calculateFrequencyForWord()', () => {

    describe('when given text is empty', () => {

      it('should return 0', () => {
        expect(service.calculateFrequencyForWord('', 'word')).toBe(0);
      });
    });

    describe('when given text is not empty', () => {

      describe('and given word is empty', () => {

        it('should return 0', () => {
          expect(service.calculateFrequencyForWord('this is my text', '')).toBe(0);
        });
      });

      describe('and given word is not empty', () => {
        describe('and given word is does not exist in the text', () => {

          beforeEach(() => {
            spyOn(WordFrequencyHelper, 'wordsFrequencies').and.returnValue([
              new WordFrequency('this', 1),
              new WordFrequency('is', 1),
              new WordFrequency('my', 1),
              new WordFrequency('text', 1)
            ]);
          });

          it('should return 0', () => {
            expect(service.calculateFrequencyForWord('not empty text', 'notexistingword')).toBe(0);
          });
        });

        describe('and given word exist in the text', () => {

          beforeEach(() => {

            spyOn(WordFrequencyHelper, 'wordsFrequencies').and.returnValue([
              new WordFrequency('this', 2),
              new WordFrequency('is', 2),
              new WordFrequency('my', 1),
              new WordFrequency('text', 1),
              new WordFrequency('as', 1),
              new WordFrequency('you', 1),
              new WordFrequency('can', 1),
              new WordFrequency('see', 1),
              new WordFrequency('just', 1),
              new WordFrequency('an', 1),
              new WordFrequency('example', 1)
            ]);
          });

          it('should return the number of times that the word was found', () => {
            expect(service.calculateFrequencyForWord('not empty text', 'this')).toBe(2);
            expect(service.calculateFrequencyForWord('not empty text', 'as')).toBe(1);
          });
        });
      });
    });

  });

  describe('#calculateMostFrequentNWords()', () => {

    describe('when given text is empty', () => {

      it('should return empty array', () => {
        expect(service.calculateMostFrequentNWords('', 1)).toEqual([]);
      });

    });

    describe('when given text is not empty', () => {

      describe('and given number is 0', () => {
        it('should return empty array', () => {
          expect(service.calculateMostFrequentNWords('Not an empty text', 0)).toEqual([]);
        });
      });

      describe('and given number is greater than 0', () => {

        let sortedWordsFrequencies: WordFrequency[];

        beforeEach(() => {
          sortedWordsFrequencies = [
            new WordFrequency('this', 4),
            new WordFrequency('is', 3),
            new WordFrequency('my', 2),
            new WordFrequency('text', 1)
          ];
        });

        describe('and given number is greater than the amount of words in the given text', () => {

          it('should return all words\' frequency in text', () => {
            spyOn(WordFrequencyHelper, 'wordsFrequencies').and.returnValue(sortedWordsFrequencies);
            expect(service.calculateMostFrequentNWords('example', 5)).toEqual(sortedWordsFrequencies);
          });
        });

        describe('and given number is lower than the amount of words in the given text', () => {

          it('should return the first n words\' frequency in the text', () => {
            spyOn(WordFrequencyHelper, 'wordsFrequencies').and.returnValue(sortedWordsFrequencies);
            expect(service.calculateMostFrequentNWords('example', 3)).toEqual(sortedWordsFrequencies.slice(0, 3));
          });
        });

        it('should sort using word frequency compare helper', () => {
          const wordFrequencies: WordFrequency[] = [];
          const sortSpy = spyOn(wordFrequencies, 'sort').and.returnValue(sortedWordsFrequencies);
          spyOn(WordFrequencyHelper, 'wordsFrequencies').and.returnValue(wordFrequencies);
          const result = service.calculateMostFrequentNWords('example', 5);
          expect(sortSpy).toHaveBeenCalledWith(WordFrequencyCompareHelper.compare);
          expect(result).toEqual(sortedWordsFrequencies);
        });
      });
    });
  });

});
