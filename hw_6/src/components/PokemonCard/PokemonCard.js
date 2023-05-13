import React from 'react'

const PokemonCard = ({list}) => {
  return (
      <div>
          <div style={{width: '250px', height: '205px', marginTop: '25px', border: '1px solid black'}}>
              <img style={{width: '150px', height: '150px', transition: '.3s', marginLeft: '50px'}} src={list.sprites.other.dream_world.front_default}/>
              <h2 style={{textAlign: 'center', marginTop: '15px'}}>{list.name}</h2>
          </div>
      </div>
  )
}

export default PokemonCard