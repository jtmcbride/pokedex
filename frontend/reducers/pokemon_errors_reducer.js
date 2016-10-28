import {RECEIVE_POKEMON_ERRORS, receivePokemonErrors } from '../actions/pokemon_actions';

const PokemonErrorsReducer = (state = [], action) =>{
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return JSON.parse(action.errors);
    default:
      return state;
  }
};

export default PokemonErrorsReducer;
