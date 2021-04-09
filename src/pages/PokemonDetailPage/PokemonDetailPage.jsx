import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'
import { fetchPokemonDetail, catchPokemon } from '../../store/thunks'
import { getIsLoading, getPokemonDetail } from "../../store/selectors";
import { successModal, failedModal } from "../../components/Modal/Modal";
import config from "../../config";
import icons from "../../components/Icon";
import styled from "styled-components";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import ProgressBar from "../../components/ProgressBar/ProgressBar";

import './PokemonDetailPage.scss'

const MySwal = withReactContent(Swal)
const ListItemContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 24px -4px rgba(0,0,0,.12);
  padding: 16px;
  width:100%;
  max-width: 1200px;
  margin: auto;
`


const pokemonImage = (id) => {
   return config.getApiImagePath(config.api.pokemon_image(id))
}

const pokemonType = (type) => {
  return icons[type]
}

const drawChance = () => {
   return Math.floor(Math.random() * 2);
}

const PokemonDetailPage = ({ isLoading, pokemonDetail, startFetchingPokemonDetail, startCatchPokemon }) => {
  const { pokemonName } = useParams()
  const history = useHistory()

   useEffect(() => {
     startFetchingPokemonDetail(pokemonName)
   }, [])

   const catchPokemon = () => {
      const success = drawChance()
      success ? setNicknameModal() : failedModal()
   }

   const pokemonTypes = (types) => {
     return types ? types.map((type, index) =>
       <img className="type-icon" src={pokemonType(type.type.name)} alt={type.type.name} key={index}/>
     ) : null
   }

   const pokemonAbilities = (abilities) => {
     return abilities ? abilities.map((ability, index) =>
       <div key={index} className="pokemon-detail-abilities-item">{ability.ability.name.split('-').join(' ')}</div>
     ) : null
   }

   const pokemonStats = (stats) => {
     return stats ? stats.map((stat, index) =>
       <div className="pokemon-detail-rating" key={index}>
         <div className="pokemon-detail-rating-name">{stat.stat.name.split('-').join(' ')}</div>
         <ProgressBar progress={stat.base_stat} />
         <span className="pokemon-detail-rating-stat">{stat.base_stat}</span>
       </div>
     ) : null
   }

   const pokemonMoves = (moves) => {
     return moves ? moves.map((move, index) =>
       <div className="pokemon-detail-abilities-item">{move.move.name.split('-').join(' ')}</div>
     ) : null
   }

   const promptCatchModal = () => {
     let timerInterval
     MySwal.fire({
       title: 'Catching Pokemon!',
       html: `They're running away...`,
       timer: 2000,
       timerProgressBar: true,
       didOpen: () => {
         Swal.showLoading()
         timerInterval = setInterval(() => {
           const content = Swal.getContent()
           if (content) {
             const b = content.querySelector('b')
             if (b) {
               b.textContent = Swal.getTimerLeft()
             }
           }
         }, 100)
       },
       willClose: () => {
         clearInterval(timerInterval)
       }
     }).then(() => catchPokemon())
   }

   const setNicknameModal = () => {
     MySwal.fire({
       icon: 'success',
       title: 'Gotcha!',
       text: `Let's give it a name`,
       input: 'text',
       inputAttributes: {
         autocapitalize: 'off'
       },
       showCancelButton: true,
       confirmButtonText: 'Save',
       showLoaderOnConfirm: true,
       preConfirm: (nickname) => {
         startCatchPokemon({ pokemonDetail, nickname, isExists: (nickname) => failedModal(nickname)  })
       },
     }).then((result) => {
       if (result.isConfirmed) successModal({ result, routeTo: () => history.push('/my-pokemon') })
     })
   }

   const topContent = (
     <ListItemContainer>
       <div className="top-card-container">
         <img className="pokemon-detail-image" src={pokemonImage(pokemonDetail.id)} alt="" />
         <div className="top-card-main-info">
           <div className="pokemon-detail-name">{pokemonDetail.name}</div>
           <div className="pokemon-detail-container">
             { pokemonTypes(pokemonDetail.types) }
           </div>
           <button className="pokemon-detail-catch-btn" type="button" onClick={() => promptCatchModal() }>Catch me</button>
         </div>
       </div>
     </ListItemContainer>
   )

  const bottomContent = (
    <ListItemContainer>
      <h3 className="pokemon-detail-abilities-title">Stats</h3>
      { pokemonStats(pokemonDetail.stats) }
      <h3 className="pokemon-detail-abilities-title">Abilities</h3>
      <div className="pokemon-detail-container">
        { pokemonAbilities(pokemonDetail.abilities) }
      </div>
      <div className="pokemon-detail-moves">
        <h3 className="pokemon-detail-moves-title">Moves</h3>
        <div className="pokemon-detail-container">{pokemonMoves(pokemonDetail.moves)}</div>
      </div>
    </ListItemContainer>
  )

  const content = (
    <div>
      {topContent}
      <br/>
      {bottomContent}
    </div>
  )

   return isLoading ? null : content
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  pokemonDetail: getPokemonDetail(state)
})

const mapDispatchToProps = dispatch => ({
   startFetchingPokemonDetail: (pokemonName) => dispatch(fetchPokemonDetail(pokemonName)),
   startCatchPokemon: ({ pokemonDetail, nickname, isExists }) => dispatch(catchPokemon({
     pokemonDetail, nickname, isExists
   }))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailPage)
