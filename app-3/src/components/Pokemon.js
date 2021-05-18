import axios from "axios";
import { useState, useEffect } from "react";

const Pokemon = (props) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, [props.match.params.name]);

  return (
    <div>
      {info ? (
        <div>
          <p>{info.name}</p>
          <img alt={info.name} src={info.sprites.front_default} />
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};

export default Pokemon;
