export const LOAD_POKEMON_IN_PROGRESS = "LOAD_POKEMON_IN_PROGRESS";
export const LOAD_POKEMON_SUCCESS = "LOAD_POKEMON_SUCCESS";
export const LOAD_POKEMON_FAILURE = "LOAD_POKEMON_FAILURE";
export const LOAD_POKEMON_DETAIL_SUCCESS = "LOAD_POKEMON_DETAIL_SUCCESS";

export const loadPokemonInProgress = () => ({
  type: LOAD_POKEMON_IN_PROGRESS,
});

export const loadPokemonSuccess = (pokemons) => ({
  type: LOAD_POKEMON_SUCCESS,
  payload: { pokemons },
});

export const loadPokemonFailure = () => ({
  type: LOAD_POKEMON_FAILURE,
});

export const loadPokemonDetailSuccess = (pokemon) => ({
  type: LOAD_POKEMON_DETAIL_SUCCESS,
  payload: { pokemon },
});
