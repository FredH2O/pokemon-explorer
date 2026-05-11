import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./styles/App.css";
import axios from "axios";

function PokemonExplorerApp() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10"); // gets a list

      const detailed = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const pokeRes = await axios.get(pokemon.url);
          console.log(pokeRes.data);

          return {
            name: pokeRes.data.name,
            image: pokeRes.data.sprites.front_default,
          };
        }),
      );

      setPokemon(detailed);
    }

    fetchPokemon();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Pokémon Explorer</h1>

      <div className="grid">
        {pokemon.map((p, index) => (
          <PokemonCard key={index} name={p.name} image={p.image} />
        ))}
      </div>
    </div>
  );
}

export default PokemonExplorerApp;
