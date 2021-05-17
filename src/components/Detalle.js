import productos from "./Productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Detalle() {
  var { id } = useParams();

  var [producto, setProducto] = useState({});

  useEffect(() => {
    var resultado = productos.find(function (dato) {
      if (dato.id == id) {
        return true;
      }
      return false;
    });
    setProducto(resultado);
  });

  return (
    <>
      <TopBar />
      <MenuBar />

      <div className="detail">
        <div className="product" key={producto.id}>
          <img src={producto.photo} alt="producto" />
          <div className="description">
            <p className="name">{producto.name}</p>
            <p className="price">${producto.price}</p>
            <Link to="/carrito">
              <button className="btn-buy">Comprar</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detalle;
