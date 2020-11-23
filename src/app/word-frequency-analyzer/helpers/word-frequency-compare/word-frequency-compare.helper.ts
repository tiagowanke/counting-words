import { WordFrequency } from '../../model/word-frequency.model';

export class WordFrequencyCompareHelper {

  /**
   * Compare two WordFrequency.
   * The compare first uses the frequency, the greater frequency comes first. If the frequencies are the same the compare
   * uses the word using ascendant alphabetical order. Example: (“over”, 1), (“lake”, 1). The return value will be -1
   */
  static compare(wordFrequency1: WordFrequency, wordFrequency2: WordFrequency): number {

    if (wordFrequency1.getFrequency() > wordFrequency2.getFrequency()) {
      return -1;
    }

    if (wordFrequency1.getFrequency() === wordFrequency2.getFrequency()) {
      return wordFrequency1.getWord().localeCompare(wordFrequency2.getWord());
    }

    return 1;
  }
}
