import React, {useState} from "react";

import './PokemonSearchBar.scss'

const PokemonSearchBar = ({ onSearchPokemon }) => {
  const [searchPokemon, setSearchPokemon] = useState('')

  const handleChange = (term) => {
    setSearchPokemon(term)
    onSearchPokemon(term)
  }
  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search Pokemon"
        value={searchPokemon}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  )
}

export default PokemonSearchBar
