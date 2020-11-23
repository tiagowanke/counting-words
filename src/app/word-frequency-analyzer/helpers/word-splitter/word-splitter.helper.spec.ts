import {WordSplitterHelper} from './word-splitter.helper';

describe('WordSplitterHelper', () => {

  describe('#splitTextInWords()', () => {

    describe('when text is informed', () => {

      describe('and text is not empty', () => {

        describe('and there are words', () => {
          it('should return an array with every word in given text', () => {
            const text = 'This is a text. The goal is to extract the words of ' +
              'this text, considering characters that are not words like: ., &, , # etc.';
            expect(WordSplitterHelper.splitTextInWords(text)).toEqual([
              'This', 'is', 'a', 'text', 'The', 'goal', 'is', 'to', 'extract', 'the', 'words', 'of', 'this', 'text',
              'considering', 'characters', 'that', 'are', 'not', 'words', 'like', 'etc'
            ]);
          });
        });

        describe('and there are no words', () => {
          it('should return an empty array', () => {
            const text = ': ., &, , # .';
            expect(WordSplitterHelper.splitTextInWords(text)).toEqual([]);
          });
        });
      });

      describe('and text is empty', () => {

        it('should return an empty array', () => {
          expect(WordSplitterHelper.splitTextInWords('')).toEqual([]);
        });
      });
    });

    describe('when text is not informed', () => {

      it('should return empty array', () => {
        expect(WordSplitterHelper.splitTextInWords(null as any)).toEqual([]);
      });
    });

  });


});
