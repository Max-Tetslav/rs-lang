export interface IWord {
  id: string;
  _id?: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

interface IUserWordObject {
  difficuly: 'hard' | 'easy';
  optional: {
    isLearned: true | false;
  };
}

export interface IUserWord {
  _id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
  userWord: IUserWordObject;
}

export interface IUserWordData {
  difficulty: string;
  id: string;
  wordId: string;
}

export type TCommonUserWord = Omit<IWord & IUserWord, 'id'>;

export interface IWordsState {
  hardWords: IWord[];
  learnedWords: TCommonUserWord[];
}
