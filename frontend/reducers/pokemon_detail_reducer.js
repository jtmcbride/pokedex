import {RECEIVE_A_POKEMON, requestAPokemon } from '../actions/pokemon_actions';

const PokemonDetailReducer = (state= {}, action) =>{
  switch (action.type) {
    case RECEIVE_A_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
