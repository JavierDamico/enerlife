import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/Home.js";
import Contacto from "./components/contacto.js";
import ComoComprar from "./components/como-comprar.js";
import Tienda from "./components/tienda.js";
import MediosPago from "./components/medios-pago";
import Almacen from "./components/Almacen";
import Dulces from "./components/Dulces";
import Cereales from "./components/Cereales";
import Especias from "./components/Especias";
import Snacks from "./components/Snacks";
import Untables from "./components/Untables";
import Harinas from "./components/Harinas";
import Infusiones from "./components/Infusiones";
import Suplementos from "./components/Suplementos";
import Detalle from "./components/Detalle"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/productos/:id">
          <Detalle />
        </Route>

        <Route path="/especias">
          <Especias />
        </Route>

        <Route path="/snacks">
          <Snacks />
        </Route>

        <Route path="/untables">
          <Untables />
        </Route>

        <Route path="/harinas">
          <Harinas />
        </Route>

        <Route path="/infusiones">
          <Infusiones />
        </Route>

        <Route path="/suplementos">
          <Suplementos />
        </Route>

        <Route path="/cereales">
          <Cereales />
        </Route>

        <Route path="/almacen">
          <Almacen />
        </Route>

        <Route path="/dulces">
          <Dulces />
        </Route>

        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/como-comprar">
          <ComoComprar />
        </Route>

        <Route path="/tienda">
          <Tienda />
        </Route>

        <Route path="/medios-pago">
          <MediosPago />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
