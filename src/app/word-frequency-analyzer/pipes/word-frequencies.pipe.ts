import { Pipe, PipeTransform } from '@angular/core';
import { WordFrequency } from '../model/word-frequency.model';

@Pipe({ name: 'wordFrequencies' })
export class WordFrequenciesPipe implements PipeTransform {

  transform(value: WordFrequency[]): string {
    let toString = '';

    value.forEach((wordFrequency: WordFrequency, index: number, list: WordFrequency[]) => {
      toString = toString.concat(`${wordFrequency.getWord()}:${wordFrequency.getFrequency()}`);

      if (index < list.length - 1) {
        toString = toString.concat(', ');
      }
    });

    return toString;
  }

}
