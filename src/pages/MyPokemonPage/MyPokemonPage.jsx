import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getIsLoading, getMyPokemon} from "../../store/selectors";
import {fetchMyPokemonList, removeMyPokemon} from "../../store/thunks";

import PokemonCard from "../../components/PokemonCard/PokemonCard";

import './MyPokemonPage.scss'

const MyPokemonPage = ({ isLoading, myPokemonList, startFetchMyPokemonList, startRemovePokemon }) => {
  useEffect(() => {
    startFetchMyPokemonList()
  }, [])

  const content = (
    <div>
      <div>Hello, name</div>
      <div className="my-pokemon-container">
        { myPokemonList.map((pokemon, index) =>
          <PokemonCard
            key={index}
            pokemon={pokemon}
          />
        )}
      </div>
    </div>
  )
  return isLoading ? null : content
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  myPokemonList: getMyPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  startFetchMyPokemonList: () => dispatch(fetchMyPokemonList()),
  startRemovePokemon: (pokemonId) => dispatch(removeMyPokemon(pokemonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonPage)
