import { getDataViaApi } from "./http";
import config from "../config";

function getPokemonList(callback, errorHandler, payload) {
  getDataViaApi({
    path: config.api.pokemon_list,
    callback,
    errorHandler,
    requestParams: payload,
  });
}

function getPokemonDetail(callback, errorHandler, pokemonName) {
  getDataViaApi({
    path: config.api.pokemon_detail(pokemonName),
    callback,
    errorHandler,
  });
}

export { getPokemonList, getPokemonDetail };
