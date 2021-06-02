import productos from "./Productos";
import { Link } from "react-router-dom";

// const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
var arrDestacados = [...productos].sort(() => Math.random() - 0.5);

function GenDestacados() {
  var pages = arrDestacados.slice(1, 5);

 
  return (
    <>
      <div className="destacados">
        {pages.map(function (producto) {
          return (
            <div className="prod-destacado" key={producto.id}>
              <img src={producto.photo} alt="producto" />
              <p className="name">{producto.name}</p>
              <p className="price">${producto.price}</p>
              <Link to={`/productos/${producto.id}`}>
                <button className="btn-product">Detalles</button>
              </Link>
              <button
                className="btn-product"
                
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

export default GenDestacados;
