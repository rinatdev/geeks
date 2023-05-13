import React, { useEffect, useState } from "react";
import {fetchPokemonS, fetchPokemons} from '../../api/fetchPokemons';
import Pagination from '../../components/Pagination/Pagination'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import {Button} from "@mui/material";
const MainPage = () =>  {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ offset, setOffset ] = useState(10);
  const [page, setPage ] = useState(1);
  const [ pageCount, setPageCount ] = useState(0);

const limit = 10;
useEffect(() => { 
  fetchPokemons(limit, offset)
  .then((data)=> {
    setPokemonList(data.results);
    setPageCount(Math.ceil(data.count / 10))
  });
}, [offset])

    const sortWeight = () => {
        fetchPokemonS(10,20,'weight').then(s => setPokemonList(s))
    }

    const sortAttach = () => {
        fetchPokemonS(10,20,'attach').then(s => setPokemonList(s))
    }

    const sortHp = () => {
        fetchPokemonS(10,20,'hp').then(s => setPokemonList(s))
    }

const handleChangePage = (type) => {
  if(type === 'next') {
    setOffset(prev => prev += 10)
    setPage(prev => prev += 1);
  }
  else {
    if(offset <= 10) return 
    setOffset(prev => prev - 10)
  }
} 
  return (
    <div className="mainPage">
      <div className="container">
          <Button variant="contained" color='success' onClick={sortWeight}>sort weight</Button>
          <Button variant="contained" color='secondary' onClick={sortAttach}>sort attach</Button>
          <Button variant="contained" color='primary' onClick={sortHp}>sort hp</Button>
      <div className="pokemonList">
    {pokemonList.map(pokemon => <PokemonCard
  pokemon={pokemon} />)}
        </div> 
      </div>
      <Pagination 
      pageCount={pageCount}
      changeOffset={handleChangePage}
      page={page}
      />
    </div>
  );
}

export default MainPage;
