import React, {useEffect, useState} from 'react'
import axios from "axios";

const PokemonCard = ({ pokemon }) => {
    const  [ image, setImage ] = useState('');
    useEffect(()=>{
        axios.get(pokemon.url).then((data)=>{
            console.log(data, 'respoonse');
            setImage(data.data.sprites.other.dream_world.front_default)
        })
    },[pokemon.url])
    return (
    <div className='pokemonCard'>
        {pokemon.name}
        <img src={image} alt="pokemon images"/>
    </div>
  )
}

export default PokemonCard