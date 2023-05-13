import axios from "axios"

const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(setList) => {
    try {
        const { data } = await axios.get(baseURL + 'pokemon/')
        // setList(data.results)
        data.results.forEach(async i => {
            const { data } = await axios.get(i.url)
            setList(e => [...e, data])
        })
    }catch(e) {
        console.log(e)
    }
}