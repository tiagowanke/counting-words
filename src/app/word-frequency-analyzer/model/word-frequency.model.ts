export class WordFrequency {

  private readonly word: string;
  private readonly frequency: number;

  constructor(word: string, frequency: number) {
    this.word = word;
    this.frequency = frequency;
  }

  getWord(): string {
    return this.word;
  }

  getFrequency(): number {
    return this.frequency;
  }

}
