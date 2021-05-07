import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './styles/App.css';
import Home from './components/Home.js'
import Contacto from './components/contacto.js'
import ComoComprar from './components/como-comprar.js'
import Tienda from './components/tienda.js'
import MediosPago from './components/medios-pago'

function App() {
  return (
    <Router>
      <Switch>
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

        {/* <Route path="/productos/:id">
          <ProductDetail />
        </Route> */}

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
