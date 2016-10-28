import ReactDOM from 'react-dom';
import React from 'react';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import Root from './components/root';




document.addEventListener("DOMContentLoaded", (e) => {
  let store = configureStore();
  window.s = store;
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
