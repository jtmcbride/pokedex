import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};


export const selectItem = (state, itemId) => {

  return state.pokemonDetail.items.find(item => (item.id === itemId));
};
