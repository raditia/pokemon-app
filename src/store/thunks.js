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
      response.data.results.forEach(result => {
        getPokemonDetail(
          (response) => {
            dispatch(loadPokemonSuccess(response.data));
          },
          (error) => console.log(error),
          result.name
        );
      })
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
