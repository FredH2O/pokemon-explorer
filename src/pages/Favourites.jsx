import "../styles/Favourites.css";

function Favourites({ favouritePokemon }) {
  return (
    <div className="favourite-pokemon-page">
      {favouritePokemon.map((pokemon) => (
        <div className="favourite-pokemon-card" key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Favourites;
