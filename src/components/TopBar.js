import { Link } from "react-router-dom";
import Search from "./Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

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
          <p className="micuenta">Mi cuenta</p>
        </div>
        <div>
          <Link to="/cart">
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
