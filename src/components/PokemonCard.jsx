import "../styles/PokemonCard.css";

function PokemonCard({ pokemon, addToFavourites }) {
  return (
    <div className="card">
      <h3>{pokemon.name}</h3>
      <p>#{pokemon.id}</p>
      <img src={pokemon.image} alt={pokemon.name} />

      <p>Type: {pokemon.types.join(", ")}</p>

      <audio controls>
        <source src={pokemon.cry} type="audio/ogg" />
      </audio>

      <button onClick={() => addToFavourites(pokemon)}>
        Add to favourites
      </button>
    </div>
  );
}

export default PokemonCard;
