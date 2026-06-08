import "../styles/Favourites.css";

function Favourites({ favouritePokemon, removeFromFavourites }) {
  return (
    <div className="favourite-pokemon-page">
      {favouritePokemon.map((pokemon) => (
        <div
          className="favourite-pokemon-card flex flex-col gap-3"
          key={pokemon.id}
        >
          <img className="mx-auto" src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>

          <button
            className="bg-red-500 w-full p-2 text-white 
            rounded active:translate-y-1 ease-in 
            duration-150 cursor-pointer hover:bg-red-800"
            onClick={() => removeFromFavourites(pokemon.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default Favourites;
