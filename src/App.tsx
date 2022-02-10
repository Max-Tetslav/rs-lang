import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { State, StateCommon } from './types/gameTypes';

import Book from './views/book/Book';
import AudioCall from './views/games/AudioCall/GamePageAudioCall';
import { gameReducer } from './views/games/GameReducer';
import Games from './views/games/Games';
import Sprint from './views/games/Sprint/GamePageSprint';
import Homepage from './views/homepage/Homepage';
import NotFound from './views/notFound/NotFound';
import Root from './views/Root';
import Stats from './views/stats/Stats';
import Team from './views/team/Team';

const commonState: StateCommon = {
  title: '',
};

type Action = { type: string; payload: any }; // eslint-disable-line

const commonReducer: Reducer<StateCommon, Action> = (state = commonState, action) => { // eslint-disable-line
  if (action.type === 'SET_PAGE_TITLE') {
    return {
      ...state,
      title: action.payload,
    };
  }

  return state;
};

const rootStore = combineReducers<State>({
  commonReducer,
  gameReducer,
});
const store = createStore(rootStore, composeWithDevTools(applyMiddleware(thunkMiddleware)));
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Homepage />} />
            <Route path="book" element={<Book />} />
            <Route path="/games/audiocall" element={<AudioCall />} />
            <Route path="/games/sprint" element={<Sprint />} />
            <Route path="games" element={<Games />} />
            <Route path="stats" element={<Stats />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
