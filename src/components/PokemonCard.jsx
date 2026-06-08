import "../styles/PokemonCard.css";

function PokemonCard({ pokemon, addToFavourites }) {
  return (
    <div className="card flex flex-col gap-1 hover:-translate-y-1 duration-150">
      <h3 className="font-bold text-xl">{pokemon.name}</h3>
      <p>#{pokemon.id}</p>
      <img className="mx-auto" src={pokemon.image} alt={pokemon.name} />

      <p>Type: {pokemon.types.join(", ")}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>

      <audio controls className="my-4">
        <source src={pokemon.cry} type="audio/ogg" />
      </audio>

      <button
        className="active:translate-y-1 ease-in duration-75"
        onClick={() => addToFavourites(pokemon)}
      >
        Add to favourites
      </button>
    </div>
  );
}

export default PokemonCard;
