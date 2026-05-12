// pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");

      const detailed = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const pokeRes = await axios.get(pokemon.url);
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
    <div className="grid">
      {pokemon.map((p, index) => (
        <PokemonCard key={index} name={p.name} image={p.image} />
      ))}
    </div>
  );
}

export default Home;
