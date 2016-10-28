import {combineReducers} from 'redux';
import {PokemonReducer} from './pokemon_reducer.js';
import PokemonErrorsReducer from './pokemon_errors_reducer';
import PokemonDetailReducer from './pokemon_detail_reducer';
import {LoadingReducer} from './loading_reducer';


export const RootReducer = combineReducers({
  pokemon: PokemonReducer,
  pokemonDetail: PokemonDetailReducer,
  errors: PokemonErrorsReducer,
  loading: LoadingReducer
});
