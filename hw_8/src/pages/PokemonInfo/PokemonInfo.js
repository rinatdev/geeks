import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
import {Button} from "@mui/material";
const PokemonInfo = () => {
  const [ pokemon, setPokemon ] = useState();
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getPokemon(id).then((data => setPokemon(data)));
  }, [ id ])
  console.log(pokemon);
  return (
    <div>
      <img src={pokemon?.sprites.other.dream_world.front_default}  alt='fd' />
        <h2>name: {pokemon?.name}</h2>
      <h4>sm: {pokemon?.height}</h4>
      <h5>grams: {pokemon?.weight}</h5>
        <h5>{pokemon?.stats[0]?.stat.name}: {pokemon?.stats[0]?.base_stat}</h5>
        <h5>{pokemon?.stats[1]?.stat.name}: {pokemon?.stats[1]?.base_stat}</h5>
        <Button variant='contained' onClick={() => navigate(-1)}>back</Button>
    </div>
  )
}

export default PokemonInfo
