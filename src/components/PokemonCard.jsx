import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 24px -4px rgba(0,0,0,.12);
  padding: 16px;
  max-width: 500px;
  margin-top: 16px;
  cursor: pointer
`


const PokemonCard = ({ pokemon, onItemPressed }) => (
   <ListItemContainer onClick={ () => onItemPressed(pokemon.name) }>
      <div>{pokemon.name}</div>
      <div>{ pokemon.url }</div>
   </ListItemContainer>
)

export default PokemonCard