export interface IStatsGame {
  userID: string;
  nameGame: string;
  day: number;
  month: number;
  year: number;
  wordsTrue: number;
  wordsFalse: number;
  seriesTrueAnswers: number;
}

export interface StatsState {
  learnedWords: number;
  optional: IStatsGame[];
}
