import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";
const App = () =>  {
  const [ theme, setTheme ] = useState('dark');
  const [ list, setList ] = useState([]);

  const toogleTheme  = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

useEffect(() => {
  fetchPokemons(setList)
}, [])
console.log(list, 'list',);
  return (
    <div className={`app ${theme}`}>
      <button 
      onClick={toogleTheme}
      className="button">
        Change Theme
      </button>
        <div className='blocks'>
            {
                list.map((i, k) => <PokemonCard key={k} list={i}/>)
            }
        </div>
    </div>
  );
}

export default App;
