import {
  LOAD_POKEMON_IN_PROGRESS,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILURE,
  LOAD_POKEMON_DETAIL_SUCCESS,
} from "./actions";

const INITIAL_STATE = {
  isLoading: false,
  pokemonList: [],
  pokemonDetail: {},
};

export const pokemon = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_POKEMON_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_POKEMON_SUCCESS:
      const { pokemons } = payload;
      return {
        ...state,
        isLoading: false,
        pokemonList: pokemons,
      };
    case LOAD_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_POKEMON_DETAIL_SUCCESS:
      const { pokemon } = payload;
      return {
        ...state,
        isLoading: false,
        pokemonDetail: pokemon,
      };
    default:
      return state;
  }
};
