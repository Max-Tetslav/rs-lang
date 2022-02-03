import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Book from './views/book/Book';
import Games from './views/games/Games';
import Homepage from './views/homepage/Homepage';
import NotFound from './views/notFound/NotFound';
import Root from './views/Root';
import Stats from './views/stats/Stats';
import Team from './views/team/Team';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Homepage />} />
          <Route path="book" element={<Book />} />
          <Route path="games" element={<Games />} />
          <Route path="stats" element={<Stats />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
