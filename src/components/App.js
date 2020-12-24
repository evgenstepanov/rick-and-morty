import React from 'react';
import 'regenerator-runtime/runtime';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterPage from './pages/CharacterPage';
import StoreProvider from '../store';
import '../index.css';

export default function App() {
  return (
    <StoreProvider>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/:id'>
          <CharacterPage />
        </Route>
      </Switch>
    </StoreProvider>
  );
}
