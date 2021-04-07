// import { createSelector } from "reselect";

export const getIsLoading = (state) => state.pokemon.isLoading;
export const getPokemonList = (state) => state.pokemon.pokemonList;
export const getPagination = (state) => state.pokemon.pagination
