import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchPokemonDetail, catchPokemon, removeMyPokemon} from '../store/thunks'
import './PokemonDetailPage.css'
import config from "../config";
import db from "../firebase.config";

const pokemonImage = (id) => {
   return config.getApiImagePath(config.api.pokemon_image(id))
}

const drawChance = () => {
   return Math.floor(Math.random() * 2);
}

const PokemonDetailPage = ({ pokemonDetail, startFetchingPokemonDetail, startCatchPokemon, startRemovePokemon }) => {
   const { pokemonName } = useParams()
   useEffect(() => {
      startFetchingPokemonDetail(pokemonName)
   }, [])

   const catchPokemon = () => {
      const success = drawChance()
      console.log(success)
      success ? startCatchPokemon({ pokemonDetail, nickname: 'radit'}) : alert('Fail')
   }

   return (
     <div>
        <div>{pokemonDetail.name}</div>
        <img className="pokemon-image" src={pokemonImage(pokemonDetail.id)} alt="" />
        <button type="button" onClick={() => catchPokemon() }>Catch</button>
        <button type="button" onClick={() => startRemovePokemon(pokemonDetail.id)}>Remove</button>
     </div>
   )
}

const mapStateToProps = state => ({
   pokemonDetail: state.pokemon.pokemonDetail
})

const mapDispatchToProps = dispatch => ({
   startFetchingPokemonDetail: (pokemonName) => dispatch(fetchPokemonDetail(pokemonName)),
   startCatchPokemon: ({ pokemonDetail, nickname }) => dispatch(catchPokemon({ pokemonDetail, nickname })),
   startRemovePokemon: (pokemonId) => dispatch(removeMyPokemon(pokemonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailPage)
