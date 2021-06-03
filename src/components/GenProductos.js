import productos from "./Productos";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import {useParams} from 'react-router-dom'

function GenProductos(props) {
  var [cart, setCart] = useState([]);

  var pages = productos.filter(
    (categ) => categ.category_id == props.category_id
  );

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart"))  || [] );
  },[]);

  function addToCart(producto) {
    var exists = cart.find((p) => p.id == producto.id);

    if (exists) {
      var tmp = cart.map(function (p) {
        if (p.id == producto.id) {
          p.qty++;
          p.stock--;
        }

        return p;
      });
    } else {
      var tmp = cart.concat({
        ...producto,
        qty: 1,
        stock: producto.stock - 1,
      });
    }

    setCart(tmp);

    localStorage.setItem("cart", JSON.stringify(tmp));
  }

  return (
    <>
      <div className="tarj-prod">
        {pages.map(function (producto) {
          return (
            <div className="producto" key={producto.id}>
              <img src={producto.photo} alt="producto" />
              <p className="name">{producto.name}</p>
              <p className="price">${producto.price}</p>
              <Link to={`/productos/${producto.id}`}>
                <button className="btn-product">Detalles</button>
              </Link>

              <button
                className="btn-product"
                onClick={() => addToCart(producto)}
              >
                Comprar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GenProductos;
