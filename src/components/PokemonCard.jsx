import "../styles/PokemonCard.css";

function PokemonCard({ pokemon, addToFavourites }) {
  return (
    <div className="card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt={pokemon.name} />

      <button onClick={() => addToFavourites(pokemon)}>
        Add to favourites
      </button>
    </div>
  );
}

export default PokemonCard;
