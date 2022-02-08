export type ChosenGameProps = {
  gameName: string;
  gameLink: string;
};

export type StateCommon = {
  title: string;
};

export type State = {
  commonReducer: StateCommon;
};
