import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchPokemonList } from '../store/thunks'
import { getPokemonList, getIsLoading } from '../store/selectors'

import PokemonCard from '../components/PokemonCard'

const PokemonListPage = ({ isLoading, pokemonList, startFetchingPokemonList }) => {
   useEffect(() => {
    startFetchingPokemonList()
   }, [])
   const history = useHistory()

   const itemPressed = (name) => {
      const route = `/detail/${name}`
      history.push(route)
   }

   const isLoadingMessage = <div>Load Pokemon...</div>
   const content = (
      <div>
         <div>List Page</div>
         { pokemonList.map( (pokemon, index) =>
        <PokemonCard
               key={index}
               pokemon={pokemon}
               onItemPressed={ itemPressed }
        />
      ) }
      </div>
      )
   return isLoading ? isLoadingMessage : content
}

const mapStateToProps = state => ({
   isLoading: getIsLoading(state),
   pokemonList: getPokemonList(state)
})

const mapDispatchToProps = dispatch => ({
   startFetchingPokemonList: () => dispatch(fetchPokemonList({ limit: 5 }))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListPage)
