// pages/Home.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

function Home({ addToFavourites }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");

      const detailedPokemon = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const pokeRes = await axios.get(pokemon.url);
          return {
            id: pokeRes.data.id,
            name: pokeRes.data.name,
            image: pokeRes.data.sprites.front_default,
          };
        }),
      );

      setPokemon(detailedPokemon);
    }

    fetchPokemon();
  }, []);

  return (
    <div className="grid">
      {pokemon.map((singlePokemon) => (
        <PokemonCard
          key={singlePokemon.id}
          pokemon={singlePokemon}
          addToFavourites={addToFavourites}
        />
      ))}
    </div>
  );
}

export default Home;
