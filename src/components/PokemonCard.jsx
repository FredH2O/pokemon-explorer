import "../styles/PokemonCard.css";

function PokemonCard({
  pokemon,
  addToFavourites,
  favouritePokemon,
  removeFromFavourites,
}) {
  const alreadyFavourited = favouritePokemon.some(
    (fav) => fav.id === pokemon.id,
  );

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

      {alreadyFavourited ? (
        <button
          className={`w-full border-none rounded-md px-3 py-2.5 text-white font-semibold cursor-pointer active:translate-y-1 ease-in duration-75
          bg-gray-400`}
          onClick={() => removeFromFavourites(pokemon.id)}
        >
          Remove from favourites
        </button>
      ) : (
        <button
          className={`w-full border-none rounded-md px-3 py-2.5 text-white font-semibold cursor-pointer active:translate-y-1 ease-in duration-75
          bg-red-500`}
          onClick={() => addToFavourites(pokemon)}
          disabled={alreadyFavourited}
        >
          Add to favourites
        </button>
      )}
    </div>
  );
}

export default PokemonCard;
