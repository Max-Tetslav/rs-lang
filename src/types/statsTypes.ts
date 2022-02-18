export interface IStatsGame {
  nameGame: string;
  day: Date;
  wordsTrue: number;
  wordsFalse: number;
  seriesTrueAnswers: number;
}

export interface StatsState {
  statistics: IStatsGame[];
}
