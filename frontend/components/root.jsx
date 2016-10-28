import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {requestAllPokemon, requestAPokemon} from '../actions/pokemon_actions.js';

import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './pokemon/pokemon_item_container';
import PokemonForm from './pokemon/pokemon_form_container';

const Root = ({ store }) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const getThePokeMan = (nextState) => {
    store.dispatch(requestAPokemon(nextState.params.id));
  };

  return (
    <Provider store={store}>
      <div className="groot">
      <Router history={hashHistory} >
        <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter}>
          <IndexRoute component={PokemonForm}/>
          <Route path="/pokemon/:id" component={PokemonDetailContainer} onEnter={getThePokeMan}>
            <Route path="/pokemon/:id/items/:itemId" component={ItemDetailContainer} />
          </Route>
        </Route>
      </Router>
      </div>
    </Provider>);

};



export default Root;
