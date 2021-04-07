import React from 'react'
import styled from 'styled-components'
import config from '../config'

import './PokemonCard.css'
import icons from '../components/Icon'

const ListItemContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 24px -4px rgba(0,0,0,.12);
  padding: 16px;
  width:250px;
  height:312px;
  margin-top: 16px;
  cursor: pointer
`

const pokemonImage = (id) => {
  return config.getApiImagePath(config.api.pokemon_image(id))
}

const pokemonType = (type) => {
  return icons[type]
}


const PokemonCard = ({ pokemon, onItemPressed }) => (
   <ListItemContainer onClick={ () => onItemPressed(pokemon.name) }>
     <img className="image" src={pokemonImage(pokemon.id)} alt="" />
     <div>
       <div className="pokemon-name">{pokemon.name.toUpperCase()}</div>
       { pokemon.types.map( (type, index) =>
         <img className="type-icon" src={pokemonType(type.type.name)} alt={type.type.name} key={index}/>
       ) }
     </div>
     <div className="flex-container">
       <div>
         <div>Height</div>
         {pokemon.height} dm
       </div>
       <div>
         <div>Weight</div>
         <div>{pokemon.weight} hg</div>
       </div>
     </div>
   </ListItemContainer>
)

export default PokemonCard
