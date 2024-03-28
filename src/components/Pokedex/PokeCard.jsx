import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, getPokemonById] = useFetch(url);

  useEffect(() => {
    getPokemonById();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  return (
    <div>
      <article onClick={handleNavigate}>
        <header>
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <section>
          <h3>{pokemon?.name}</h3>
          <ul>
            {pokemon?.types.map((typeInfo) => (
              <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))}
          </ul>
        </section>
        <footer>
          <ul>
            {pokemon?.stats.map((statInfo) => (
              <li key={statInfo.stat.url}>
                <span>{statInfo.stat.name}</span>
                <span>{statInfo.base_stat}</span>
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </div>
  );
};

export default PokeCard;
