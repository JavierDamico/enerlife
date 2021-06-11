import "../styles/App.css";
import GenDestacados from "./GenDestacados";
import TopBar from "./TopBar";
import Beneficios from "./Beneficios";
import MenuBar from "./MenuBar";
import Banner from "./Banner";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

function Home() {
  return (
    <div className="Home">
      <TopBar />

      <MenuBar />

      <Banner />

      <Beneficios />

      <div className="home-productos-container">
        <h1 className="home-productos-destacados">Productos destacados</h1>
      </div>

      <GenDestacados />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
