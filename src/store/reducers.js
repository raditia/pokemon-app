import {
  LOAD_POKEMON_IN_PROGRESS,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILURE,
  LOAD_POKEMON_DETAIL_SUCCESS,
  LOAD_MY_POKEMON_SUCCESS,
  SET_PAGINATION,
  RESET_STORE
} from "./actions";

const INITIAL_STATE = {
  isLoading: false,
  pokemonList: [],
  myPokemonList: [],
  pokemonDetail: {},
  pagination: {}
};

export const pokemon = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET_STORE:
      return INITIAL_STATE
    case LOAD_POKEMON_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_POKEMON_SUCCESS:
      const { pokemonData } = payload;
      return {
        ...state,
        isLoading: false,
        pokemonList: [...state.pokemonList, pokemonData],
      };
    case LOAD_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_POKEMON_DETAIL_SUCCESS:
      const { pokemonDetail } = payload;
      return {
        ...state,
        isLoading: false,
        pokemonDetail: pokemonDetail,
      };
    case LOAD_MY_POKEMON_SUCCESS:
      const { myPokemonList } = payload
      return {
        ...state,
        isLoading: false,
        myPokemonList
      }
    case SET_PAGINATION:
      const { next, previous } = payload
      return {
        ...state,
        pagination: {
          next,
          previous
        }
      }
    default:
      return state;
  }
};
