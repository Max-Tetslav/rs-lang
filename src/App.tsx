import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';

import TextBook from './views/textbook/TextBook';
import Games from './views/games/Games';
import Sprint from './views/games/Sprint/GamePageSprint';
import Homepage from './views/homepage/Homepage';
import NotFound from './views/notFound/NotFound';
import Root from './views/Root';
import Stats from './views/stats/Stats';
import Team from './views/team/Team';
import AudioCall from './views/games/audioCall/GamePageAudioCall';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Homepage />} />
            <Route path="book" element={<TextBook />} />
            <Route path="games" element={<Games />}>
              <Route path="audiocall" element={<AudioCall />} />
              <Route path="sprint" element={<Sprint />} />
            </Route>
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
