import { receiveAllPokemon, RECEIVE_ALL_POKEMON, REQUEST_ALL_POKEMON, RECEIVE_CREATED_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

export const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_CREATED_POKEMON:
      let newState = merge({}, state);
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};
