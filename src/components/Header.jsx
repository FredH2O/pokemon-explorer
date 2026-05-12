import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>Pokemon Explorer</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/favourites">Favourites</a>
      </nav>
    </header>
  );
}

export default Header;
