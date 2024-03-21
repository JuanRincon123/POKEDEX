import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useSelector } from "react-redux"
import PokeContainer from "../components/Pokedex/PokeContainer"


const Pokedex = () => {

  const trainerName = useSelector(state => state.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

  const [infoApi,getApi] = useFetch(url)

  useEffect(() => {
    getApi()
  },[])

  console.log(infoApi)

  return (
    <div>
      <h1>Welcome <span>{trainerName}</span>!, you can find your favorite  Pokémon</h1>
      <PokeContainer infoApi={infoApi?.results}/>
    </div>
  )
}

export default Pokedex
