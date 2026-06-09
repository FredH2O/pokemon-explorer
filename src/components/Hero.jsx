import background from "../assets/pokemon-explorer-hero-wallpaper.jpg";

function Hero() {
  return (
    <section>
      <img src={background} alt="" />
      <div>
        <h1>Welcome to Pokémon Explorer</h1>
        <p>Purely fan made and non-profit project</p>
      </div>
    </section>
  );
}

export default Hero;
