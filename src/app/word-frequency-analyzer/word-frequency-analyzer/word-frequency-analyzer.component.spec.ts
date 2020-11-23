import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WordFrequency } from '../model/word-frequency.model';
import { WordFrequencyAnalyzerService } from '../word-frequency-analyzer.service';

import { WordFrequencyAnalyzerComponent } from './word-frequency-analyzer.component';
import createSpyObj = jasmine.createSpyObj;
// eslint-disable-next-line id-blacklist
import any = jasmine.any;


describe('WordFrequencyAnalyzerComponent', () => {
  let component: WordFrequencyAnalyzerComponent;
  let fixture: ComponentFixture<WordFrequencyAnalyzerComponent>;

  const wordFrequencyAnalyzerServiceMock = createSpyObj('WordFrequencyAnalyzerService',
    [ 'calculateHighestFrequency', 'calculateFrequencyForWord', 'calculateMostFrequentNWords' ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordFrequencyAnalyzerComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: WordFrequencyAnalyzerService, useValue: wordFrequencyAnalyzerServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFrequencyAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#calculate()', () => {

    it('should calculate highest frequency', () => {
      const expectedHighestFrequency = 10;
      wordFrequencyAnalyzerServiceMock.calculateHighestFrequency.and.returnValue(expectedHighestFrequency);
      component.text = 'my text';
      component.calculate();
      expect(wordFrequencyAnalyzerServiceMock.calculateHighestFrequency).toHaveBeenCalledWith(component.text);
      expect(component.highestFrequency).toBe(expectedHighestFrequency);
    });

    it('should calculate frequency for word', () => {
      const expectedFrequencyForWord = 10;
      wordFrequencyAnalyzerServiceMock.calculateFrequencyForWord.and.returnValue(expectedFrequencyForWord);
      component.text = 'my text';
      component.word = 'myword';
      component.calculate();
      expect(wordFrequencyAnalyzerServiceMock.calculateFrequencyForWord).toHaveBeenCalledWith(component.text, component.word);
      expect(component.frequencyForWord).toBe(expectedFrequencyForWord);
    });

    it('should calculate most frequent N words', () => {
      const expectedMostFrequentNWords = [
        new WordFrequency('word1', 2),
        new WordFrequency('word2', 1)
      ];
      wordFrequencyAnalyzerServiceMock.calculateMostFrequentNWords.and.returnValue(expectedMostFrequentNWords);
      component.text = 'my text';
      component.n = 3;
      component.calculate();
      expect(wordFrequencyAnalyzerServiceMock.calculateMostFrequentNWords).toHaveBeenCalledWith(component.text, component.n);
      expect(component.mostFrequentNWord).toBe(expectedMostFrequentNWords);
    });

    describe('when text is undefined', () => {

      beforeEach(() => {
        component.text = undefined;
      });

      it('should calculate highest frequency with empty text', () => {
        component.calculate();
        expect(wordFrequencyAnalyzerServiceMock.calculateHighestFrequency).toHaveBeenCalledWith('');
      });

      it('should calculate frequency for word with empty text', () => {
        component.calculate();
        expect(wordFrequencyAnalyzerServiceMock.calculateFrequencyForWord).toHaveBeenCalledWith('', any(String));
      });

      it('should calculate most frequent N words with empty text', () => {
        component.calculate();
        expect(wordFrequencyAnalyzerServiceMock.calculateMostFrequentNWords).toHaveBeenCalledWith('', any(Number));
      });
    });

    describe('when word is undefined', () => {

      beforeEach(() => {
        component.word = undefined;
      });

      it('should calculate frequency for word with empty string as word', () => {
        component.calculate();
        expect(wordFrequencyAnalyzerServiceMock.calculateFrequencyForWord).toHaveBeenCalledWith(any(String), '');
      });
    });

    describe('when N is undefined', () => {

      beforeEach(() => {
        component.n = undefined;
      });

      it('should calculate most frequent N words with 0 as N', () => {
        component.calculate();
        expect(wordFrequencyAnalyzerServiceMock.calculateMostFrequentNWords).toHaveBeenCalledWith(any(String), 0);
      });
    });

  });
});
