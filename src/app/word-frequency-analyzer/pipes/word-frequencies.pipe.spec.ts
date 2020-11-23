import { WordFrequency } from '../model/word-frequency.model';
import { WordFrequenciesPipe } from './word-frequencies.pipe';


describe('WordFrequenciesPipe', () => {

  let wordFrequencies: WordFrequency[];

  it('create an instance', () => {
    const pipe = new WordFrequenciesPipe();
    expect(pipe).toBeTruthy();
  });

  describe('when there is no word frequency', () => {

    beforeEach(() => {
      wordFrequencies = [];
    });

    it('should return empty string', () => {
      const pipe = new WordFrequenciesPipe();
      expect(pipe.transform(wordFrequencies)).toBe('');
    });
  });

  describe('when there is word frequency', ()=> {

    describe('and there is only one', () => {

      beforeEach(() => {
        wordFrequencies = [
          new WordFrequency('myword', 1)
        ];
      });

      it('should return string representation  word:frequency', () => {
        const pipe = new WordFrequenciesPipe();
        expect(pipe.transform(wordFrequencies))
          .toBe(`${wordFrequencies[0].getWord()}:${wordFrequencies[0].getFrequency()}`);
      });
    });

    describe('and there are more than one frequency', () => {

      beforeEach(() => {
        wordFrequencies = [
          new WordFrequency('myword', 1),
          new WordFrequency('myword2', 1)
        ];
      });

      it('should return string representation word:frequency for each word separate by comma', () => {
        const pipe = new WordFrequenciesPipe();
        expect(pipe.transform(wordFrequencies))
          .toBe(`${wordFrequencies[0].getWord()}:${wordFrequencies[0].getFrequency()}, `
                        + `${wordFrequencies[1].getWord()}:${wordFrequencies[1].getFrequency()}`);
      });

    });
  });
});
