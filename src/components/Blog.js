import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <TopBar />
      <MenuBar />
      <div className="blog-container">
        <div className="blog-container__item">
          <div className="blog-container__item--img">
            <img src="/productos/turmeric.jpg" alt="curcuma" />
          </div>

          <div className="blog-container__item--text">
            <div className="blog-container__item--text__title">
              <Link to="/curcuma">
                Cúrcuma: Cómo Usar Esta Raíz "Milagrosa" Para Mejorar La Salud
              </Link>
            </div>
            <div className="blog-container__item--text__summary">
              <p>
                La búsqueda de alimentos naturales, como la cúrcuma, para
                mejorar y mantener la salud ha sido una lucha constante a través
                del tiempo.
              </p>
            </div>
            <div className="blog-container__item--text__link">
              <Link to="/curcuma">Seguir leyendo...</Link>
            </div>
          </div>
        </div>
        <div className="blog-container__item">
          <div className="blog-container__item--img">
            <img
              src="/productos/plantas_medicinales.jpg"
              alt="plantas medicinales"
            />
          </div>

          <div className="blog-container__item--text">
            <div className="blog-container__item--text__title">
              <Link to="/plantas-medicinales">
                Azúcar en la sangre, 20 plantas medicinales para balancearla
              </Link>
            </div>
            <div className="blog-container__item--text__summary">
              <p>
                Las siguientes plantas medicinales tienen propiedades especiales
                que ayudan a equilibrar los niveles de azucar en la sangre. Si
                padece de diabetes su consumo será muy beneficioso.
              </p>
            </div>
            <div className="blog-container__item--text__link">
              <Link to="/plantas-medicinales">Seguir leyendo...</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
