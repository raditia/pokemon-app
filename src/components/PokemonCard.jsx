import React from 'react'
import styled from 'styled-components'
import config from '../config'

import './PokemonCard.css'

const ListItemContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 24px -4px rgba(0,0,0,.12);
  padding: 16px;
  max-width: 500px;
  margin-top: 16px;
  cursor: pointer
`

const pokemonImage = (id) => {
  return config.getApiImagePath(config.api.pokemon_image(id))
}


const PokemonCard = ({ pokemon, onItemPressed }) => (
   <ListItemContainer onClick={ () => onItemPressed(pokemon.name) }>
     <img src={pokemonImage(pokemon.id)} alt="" />
     <div>{pokemon.name}</div>
   </ListItemContainer>
)

export default PokemonCard
