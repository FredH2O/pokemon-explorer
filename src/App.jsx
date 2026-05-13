import Header from "./components/Header";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [favouritePokemon, setFavouritePokemon] = useState(() => {
    // checks if theres any favourite pokemon
    const savedFavourites = localStorage.getItem("favouritePokemon");

    if (savedFavourites) {
      return JSON.parse(savedFavourites);
    }

    return [];
  });

  // saves favourite pokemon in local storage
  useEffect(() => {
    localStorage.setItem("favouritePokemon", JSON.stringify(favouritePokemon));
  }, [favouritePokemon]);

  function addToFavourites(pokemon) {
    setFavouritePokemon((currentFavourites) => {
      const alreadyFavourite = currentFavourites.some(
        (fav) => fav.id === pokemon.id,
      );

      if (alreadyFavourite) {
        return currentFavourites;
      }

      return [...currentFavourites, pokemon];
    });
  }

  function removeFromFavourites(id) {
    setFavouritePokemon((currentFavourites) => {
      return currentFavourites.filter((pokemon) => pokemon.id !== id);
    });
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home addToFavourites={addToFavourites} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favouritePokemon={favouritePokemon}
                removeFromFavourites={removeFromFavourites}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
