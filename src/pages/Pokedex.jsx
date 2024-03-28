import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pokedex = () => {
   
  const [selectValue, setSelectValue] = useState("all-pokemons");

  const trainerName = useSelector(state => state.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [infoApi, getApi, hasError,setInfoApi] = useFetch(url);

  const urlTypes = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(urlTypes);

  useEffect(() => {
    if(selectValue === 'all-pokemons'){
    getApi();
    }else{
      axios.get(selectValue)
      .then(res =>{
        const data = {
          results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
        }
        setInfoApi(data)
      })
      .catch((err)=>console.log(err))
    }
  }, [selectValue]);
  
  useEffect(() => {
    getAllTypes();
  }, [])

  const navigate = useNavigate();

  const searchPokemon = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChangeType = e => {
    setSelectValue(e.target.value);
  };

  return (
    <div>
      <h1>
        Welcome <span>{trainerName}</span>!, you can find your favorite Pokémon
      </h1>
      <form onSubmit={handleSubmit}>
        <input ref={searchPokemon} type="text" />
        <button>Search</button>
        <select onChange={handleChangeType}>
          <option value="all-pokemons">All pokemons</option>
          {types?.results.map((typeInfo) => (
            <option key={typeInfo.url} value={typeInfo.url}>
              {typeInfo.name}
            </option>
          ))}
        </select>
      </form>

      <PokeContainer infoApi={infoApi?.results} />
    </div>
  );
};

export default Pokedex;
