import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Pokeman from "./components/Pokeman";

function App() {
  const [pokemans, setPokemans] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemans(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {pokemans.map((pokeman, index) => (
        <Pokeman key={index} pokeman={pokeman} />
      ))}
    </div>
  );
}

export default App;
