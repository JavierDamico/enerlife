import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Banner from "./Banner";
import GenProductos from "./GenProductos";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Tienda() {
  return (
    <>
      <TopBar />
      <MenuBar />
      <Banner />

      <div className="tienda-box">
        <div className="select-cat">
          <h3>Categorias</h3>
          <ul>
            <li>
              <Link to="/almacen" className="links-tienda">Almacen</Link>
            </li>
            <li>
              <Link to="/dulces" className="links-tienda">Dulces</Link>
            </li>
            <li>
              <Link to="/cereales" className="links-tienda">Cereales y legumbres</Link>
            </li>
            <li>
              <Link to="/especias" className="links-tienda">Especias</Link>
            </li>
            <li>
              <Link to="/snacks" className="links-tienda">Snacks</Link>
            </li>
            <li>
              <Link to="/untables" className="links-tienda">Untables</Link>
            </li>
            <li>
              <Link to="/harinas" className="links-tienda">Harinas y premezclas</Link>
            </li>
            <li>
              <Link to="/infusiones" className="links-tienda">Infusiones</Link>
            </li>
            <li>
              <Link to="/suplementos" className="links-tienda">Suplementos</Link>
            </li>
          </ul>
        </div>

        <GenProductos category_id="1" />
      </div>

      <Footer />
    </>
  );
}

export default Tienda;
