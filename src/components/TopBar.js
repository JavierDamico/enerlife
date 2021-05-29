import { Link } from "react-router-dom";
import Search from "./Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

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
            <ShoppingCartOutlinedIcon
              style={{ color: "#fff" }}
              fontSize="large"
            ></ShoppingCartOutlinedIcon>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
