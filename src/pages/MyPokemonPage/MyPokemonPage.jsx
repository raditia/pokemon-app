import React, {useEffect} from "react";
import { connect } from "react-redux";
import {getIsLoading, getMyPokemon} from "../../store/selectors";
import { fetchMyPokemonList } from "../../store/thunks";

import PokemonCard from "../../components/PokemonCard/PokemonCard";

const MyPokemonPage = ({ isLoading, myPokemonList, startFetchMyPokemonList }) => {
  useEffect(() => {
    startFetchMyPokemonList()
  }, [])

  const content = (
    <div>
      <div>Hello, name</div>
      <div>
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
  startFetchMyPokemonList: () => dispatch(fetchMyPokemonList())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonPage)
