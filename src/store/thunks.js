import {
  loadPokemonInProgress,
  loadPokemonSuccess,
  loadPokemonFailure,
  loadPokemonDetailSuccess,
  loadMyPokemonSuccess,
  setPagination,
  resetStore
} from "./actions";
import db from '../firebase.config'

import { getPokemonList, getPokemonDetail } from "../api/pokemonService";

export const fetchPokemonList = (payload) => (dispatch) => {
  dispatch(resetStore())
  dispatch(loadPokemonInProgress());
  getPokemonList(
    (response) => {
      dispatch(setPagination({ next: response.data.next, previous: response.data.previous }))
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
      dispatch(loadPokemonDetailSuccess(response.data));
    },
    (error) => console.log(error),
    pokemonName
  );
};

export const catchPokemon = ({ pokemonDetail, nickname }) => (dispatch) => {
  // dispatch(loadPokemonInProgress())
  const pokemonRef = db.collection('pokemonList').doc(nickname)
  const pokemonObj = {
    id: pokemonDetail.id,
    name: pokemonDetail.name,
    types: pokemonDetail.types,
    height: pokemonDetail.height,
    weight: pokemonDetail.weight
  }

  pokemonRef.get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        pokemonRef.onSnapshot((doc) => {
          // do stuff with the data
          console.log('exist')
        });
      } else {
        pokemonRef.set({
          ...pokemonObj
        })
          .then(() => console.log('success catch'))
          .catch(error => console.log(error));
      }
    });
}

export const fetchMyPokemonList = () => async (dispatch) => {
  dispatch(loadPokemonInProgress())
  const response = db.collection('pokemonList');
  const data = await response.get();
  const list = data.docs.reduce((pokemonList, item) => {
    const obj = {
      ...item.data(),
      nickname: item.id
    }
    pokemonList.push(obj)
    return pokemonList
  }, [])
  dispatch(loadMyPokemonSuccess(list))
}

export const removeMyPokemon = (pokemonId) => (dispatch) => {
  db.collection('pokemonList')
    .doc(pokemonId.toString())
    .delete()
    .then(() => console.log('delete success'))
    .catch(error => console.log(error))
}
