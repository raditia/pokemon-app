import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPokemonList } from '../../store/thunks'
import {getPokemonList, getIsLoading, getPagination} from '../../store/selectors'
import { decodeQueryParams } from "../../utils/url";

import Pagination from "../../components/Pagination/Pagination";
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PokemonSearchBar from "../../components/PokemonSearchBar/PokemonSearchBar";

import './PokemonListPage.css'

const PokemonListPage = ({ isLoading, pokemonList, pagination, startFetchingPokemonList}) => {

   const [searchTerm, setSearchTerm] = React.useState("");
   const [searchResults, setSearchResults] = useState([]);

   useEffect(() => {
    startFetchingPokemonList({
       limit: 21
    })
   }, [])
   useEffect(() => {
      const results = pokemonList.filter(pokemon =>
        pokemon.name.includes(searchTerm)
      );
      setSearchResults(results)
   }, [pokemonList, searchTerm])

   const paginationPressed = (url) => {
      const params = decodeQueryParams(url)
      setSearchTerm('')
      startFetchingPokemonList({
         limit: params.limit,
         offset: params.offset
      })
   }

   const isLoadingMessage = <div>Load Pokemon...</div>
   const content = (
      <div>
         <PokemonSearchBar
           onSearchPokemon={term => setSearchTerm(term)}
         />
         <div className="pokemon-list-container">
            { searchResults.map( (pokemon, index) =>
              <PokemonCard
                key={index}
                pokemon={pokemon}
              />
            ) }
         </div>
         <Pagination
           next={pagination.next}
           previous={pagination.previous}
           onPaginationPressed={paginationPressed}
         />
      </div>
      )
   return isLoading ? isLoadingMessage : content
}

const mapStateToProps = state => ({
   isLoading: getIsLoading(state),
   pokemonList: getPokemonList(state),
   pagination: getPagination(state)
})

const mapDispatchToProps = dispatch => ({
   startFetchingPokemonList: ({limit = 21, offset = 0}) =>
     dispatch(fetchPokemonList({ limit, offset }))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListPage)
