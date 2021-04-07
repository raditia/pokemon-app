export const LOAD_POKEMON_IN_PROGRESS = "LOAD_POKEMON_IN_PROGRESS";
export const LOAD_POKEMON_SUCCESS = "LOAD_POKEMON_SUCCESS";
export const LOAD_POKEMON_FAILURE = "LOAD_POKEMON_FAILURE";
export const LOAD_POKEMON_DETAIL_SUCCESS = "LOAD_POKEMON_DETAIL_SUCCESS";
export const SET_PAGINATION = 'SET_PAGINATION';
export const RESET_STORE = 'RESET STORE';
export const LOAD_MY_POKEMON_SUCCESS = 'LOAD_MY_POKEMON_SUCCESS';

export const loadPokemonInProgress = () => ({
  type: LOAD_POKEMON_IN_PROGRESS,
});

export const loadPokemonSuccess = (pokemonData) => ({
  type: LOAD_POKEMON_SUCCESS,
  payload: { pokemonData },
});

export const loadPokemonFailure = () => ({
  type: LOAD_POKEMON_FAILURE,
});

export const loadPokemonDetailSuccess = (pokemonDetail) => ({
  type: LOAD_POKEMON_DETAIL_SUCCESS,
  payload: { pokemonDetail },
});

export const setPagination = ({ next, previous}) => ({
  type: SET_PAGINATION,
  payload: {
    next,
    previous
  }
})

export const loadMyPokemonSuccess = (myPokemonList) => ({
  type: LOAD_MY_POKEMON_SUCCESS,
  payload: { myPokemonList }
})

export const resetStore = () => ({
  type: RESET_STORE
})
