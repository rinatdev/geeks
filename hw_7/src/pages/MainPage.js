import React, {useEffect, useState} from 'react';
import PokemonCard from "../components/PokemonCard/PokemonCard";
import Pagination from "../components/Pagination/Pagination";
import {fetchPokemons} from "../api/fetchPokemons";
import {Link} from "react-router-dom";

const MainPage = () => {
    const [ theme, setTheme ] = useState('dark');
    const [ pokemonList, setPokemonList ] = useState([]);
    const [ offset, setOffset] = useState(30);
    const [ page, setPage] = useState(1);
    const [ pageCount, setPageCount] = useState(0);
    const toogleTheme  = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }
    const limit = 10
    useEffect(() => {
        fetchPokemons(limit, offset)
            .then((data)=> {
                setPokemonList(data.results);
                setPageCount(Math.ceil(data.count))
            });
    }, [offset])


    const handleChangePage = (type) => {
        if (type === 'next') {
            setOffset(prev => prev + 10)
            setPage(prev => prev + 1);
        }
        else {
            if (offset <=10) return
            setOffset(prev => prev - 10)
        }
    }

    return (
        <div className={`app ${theme}`}>
            <div style={{marginTop: 35}}>
                <h2><Link to='/about'>About</Link></h2>
            </div>
            <button
                onClick={toogleTheme}
                className="button">
                Change Theme
            </button>
            <div className="conteiner">
                <div className="pokemonList">
                    {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)}
                </div>
            </div>
            <Pagination
                pageCount={pageCount}
                changeOffset={handleChangePage}
                page={page}
            />
        </div>
    );
};

export default MainPage;