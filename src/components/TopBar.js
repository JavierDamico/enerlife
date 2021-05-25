import carrito from "../images/shopping_cart_white_48dp.svg";
import { Link } from "react-router-dom";
import Search from "./Search";

function TopBar() {
  return (
    <header>
      <div id="top-bar">
        <div className="logo">
          <span>
            <Link to="/">EnerLife</Link>
          </span>
        </div>
        <Search />
        <div>
          <Link to="carrito.html">
            <img className="logo-carrito" src={carrito} alt="Carrito" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
