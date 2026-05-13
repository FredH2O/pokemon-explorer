import "../styles/Favourites.css";

function Favourites({ favouritePokemon, removeFromFavourites }) {
  return (
    <div className="favourite-pokemon-page">
      {favouritePokemon.map((pokemon) => (
        <div className="favourite-pokemon-card" key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>

          <button onClick={() => removeFromFavourites(pokemon.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default Favourites;
