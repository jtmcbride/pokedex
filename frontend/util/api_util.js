export const fetchAllPokemon = (success, error) => {
  $.ajax({
    url: "api/pokemon",
    success,
    error
  });
};

export const fetchAPokemon = (id, success, error) => {
  $.ajax({
    url: `api/pokemon/${id}`,
    success,
    error
  });
};

export const createPokemon = (pokemon, success, error) => {
  $.ajax({
    url: `api/pokemon`,
    type: "POST",
    data: {pokemon: pokemon},
    success,
    error
  });
};
