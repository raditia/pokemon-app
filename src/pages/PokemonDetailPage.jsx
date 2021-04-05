import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPokemonDetail } from '../store/thunks'


const PokemonDetailPage = ({ pokemonDetail, startFetchingPokemonDetail }) => {
   const { pokemonName } = useParams()
   useEffect(() => {
      startFetchingPokemonDetail(pokemonName)
   }, [])

      return (
         <div>
            <div>{pokemonDetail.name}</div>
         <img src={pokemonDetail.sprites.front_default} alt=''/>
         </div>
      )
}

const mapStateToProps = state => ({
   pokemonDetail: state.pokemon.pokemonDetail
})

const mapDispatchToProps = dispatch => ({
   startFetchingPokemonDetail: (pokemonName) => dispatch(fetchPokemonDetail(pokemonName))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailPage)