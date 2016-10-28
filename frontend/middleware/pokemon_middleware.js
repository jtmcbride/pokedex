import { fetchAllPokemon, fetchAPokemon, createPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_A_POKEMON, receiveAPokemon, CREATE_POKEMON, receiveCreatedPokemon, receivePokemonErrors } from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';


const PokemonMiddleware = ({dispatch}) => next => action => {

  const receiveNewPokemonSuccess = pokemon => {

      dispatch(receiveCreatedPokemon(pokemon));
      hashHistory.push(`/pokemon/${pokemon.id}`);
    };


  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon((pokemon) => dispatch(receiveAllPokemon(pokemon), (e) => console.log(e)));
      next(action);
      break;
    case REQUEST_A_POKEMON:
      fetchAPokemon(action.id, (pokemon) => dispatch(receiveAPokemon(pokemon)), (e) => console.log(e));
      next(action);
      break;
    case CREATE_POKEMON:
      createPokemon(action.pokemon, receiveNewPokemonSuccess, (e) => dispatch(receivePokemonErrors(e.responseText)));
      next(action);
    default:
      next(action);
  }
};

export default PokemonMiddleware;
