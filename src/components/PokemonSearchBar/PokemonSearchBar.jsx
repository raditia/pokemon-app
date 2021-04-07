import React, {useState} from "react";

const PokemonSearchBar = ({ onSearchPokemon }) => {
  const [searchPokemon, setSearchPokemon] = useState('')

  const handleChange = (term) => {
    setSearchPokemon(term)
    onSearchPokemon(term)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchPokemon}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  )
}

export default PokemonSearchBar
