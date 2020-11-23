export class WordSplitterHelper {

  /**
   *
   * @returns array of string with each word from the given text.
   * Word: A word is represented by a sequence of one
   * or more characters between „a‟ and „z‟ or between „A‟ and
   * „Z‟). For example “agdfBh”.
   */
  static splitTextInWords(text: string): string[] {

    let words: string[] = [];
    if (text) {
      const wordPattern = /[A-Za-z]+/g;
      const matchWords = text.match(wordPattern);

      words = matchWords ? matchWords.map((word) => word.toString()) : [];
    }

    return words;
  }


}
