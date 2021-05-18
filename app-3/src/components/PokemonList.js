import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PokemonList = (props) => {
  const [pokemans, setPokemans] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemans(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {pokemans.map((pokeman) => {
        return (
          <Link key={pokeman.name} to={`/pokemon/${pokeman.name}`}>
            <p>{pokeman.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
