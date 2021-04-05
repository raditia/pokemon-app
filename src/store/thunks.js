import {
  loadPokemonInProgress,
  loadPokemonSuccess,
  loadPokemonFailure,
  loadPokemonDetailSuccess,
} from "./actions";

import { getPokemonList, getPokemonDetail } from "../api/pokemonService";

export const fetchPokemonList = (payload) => (dispatch) => {
  dispatch(loadPokemonInProgress());
  getPokemonList(
    (response) => {
      dispatch(loadPokemonSuccess(response.data.results));
      console.log(response);
    },
    (error) => {
      console.log(error);
      dispatch(loadPokemonFailure());
    },
    payload
  );
};

export const fetchPokemonDetail = (pokemonName) => (dispatch) => {
  dispatch(loadPokemonInProgress());
  getPokemonDetail(
    (response) => {
      console.log(response);
      dispatch(loadPokemonDetailSuccess(response.data));
    },
    (error) => console.log(error),
    pokemonName
  );
};
