export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_A_POKEMON = "REQUEST_A_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const RECEIVE_CREATED_POKEMON = "RECEIVE_CREATED_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const receiveAPokemon = (pokemon) => ({
  type: RECEIVE_A_POKEMON,
  pokemon
});

export const requestAPokemon = (id) => ({
  type: REQUEST_A_POKEMON,
  id
});

export const createPokemon = (pokemon) => ({
  type: CREATE_POKEMON,
  pokemon
});

export const receiveCreatedPokemon = (pokemon) => ({
  type: RECEIVE_CREATED_POKEMON,
  pokemon
});

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});
