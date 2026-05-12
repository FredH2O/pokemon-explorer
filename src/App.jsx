import Header from "./components/Header";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [favouritePokemon, setFavouritePokemon] = useState([]);

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
            element={<Favourites favouritePokemon={favouritePokemon} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
