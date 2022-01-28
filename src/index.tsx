import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.scss';
import App from './App';
import Homepage from './views/homepage/Homepage';
import Games from './views/games/Games';
import Book from './views/book/Book';
import Stats from './views/stats/Stats';
import Team from './views/team/Team';
import NotFound from './views/notFound/NotFound';

const rootElement: HTMLElement = document.getElementById('app-root') as HTMLElement;

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="book" element={<Book/>}/>
          <Route path="games" element={<Games/>}/>
          <Route path="stats" element={<Stats/>}/>
          <Route path="team" element={<Team/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  </BrowserRouter>
, rootElement);
