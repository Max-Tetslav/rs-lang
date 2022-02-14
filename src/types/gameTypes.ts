export interface ChosenGameProps {
  gameName: string;
  gameLink: string;
}

export interface StateCommon {
  title: string;
}

export interface StateGame {
  level: number;
}

export interface State {
  commonReducer: StateCommon;
  gameReducer: StateGame;
}
