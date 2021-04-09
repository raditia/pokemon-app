import React from 'react'
import styled from 'styled-components'
import config from '../../config'

import './PokemonCard.scss'
import icons from '../Icon'
import {useHistory} from "react-router-dom";

const ListItemContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 24px -4px rgba(0,0,0,.12);
  padding: 16px;
  width:250px;
  margin-top: 16px;
  cursor: pointer
`

const pokemonImage = (id) => {
  return config.getApiImagePath(config.api.pokemon_image(id))
}

const pokemonType = (type) => {
  return icons[type]
}


const PokemonCard = ({ pokemon, hasRemoveButton = false, onRemovePressed }) => {
  const history = useHistory()
  const itemPressed = (name) => {
    const route = `/detail/${name}`
    history.push(route)
  }

  return (
    <ListItemContainer>
      <div onClick={ () => itemPressed(pokemon.name) }>
        <img className="image" src={pokemonImage(pokemon.id)} alt="" />
        <div>
          <div className="pokemon-title">{pokemon.nickname ? pokemon.nickname : pokemon.name.toUpperCase()}</div>
          { pokemon.types.map( (type, index) =>
            <img className="type-icon" src={pokemonType(type.type.name)} alt={type.type.name} key={index}/>
          ) }
        </div>
        <div className="flex-container">
          <div className="pokemon-subtitle">
            <div>Height</div>
            { pokemon.height * 10 } cm
          </div>
          <div className="pokemon-subtitle">
            <div>Weight</div>
            <div>{ pokemon.weight / 10 } kg</div>
          </div>
        </div>
      </div>
      { hasRemoveButton
        ? <button className="pokemon-remove" type="button" onClick={() => onRemovePressed(pokemon.nickname)}>Release</button>
        : null }
    </ListItemContainer>
  )
}

export default PokemonCard
