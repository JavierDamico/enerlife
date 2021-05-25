import Topbar from "./TopBar";
import MenuBar from "./MenuBar.js";
import Footer from "./Footer.js";

function Contacto() {
  return (
    <>
      <Topbar />
      <MenuBar />

      <div className="contact">
        <div className="contact-items">
          <h1>Contacto</h1>
          <p>
            Estimado Cliente, si necesita contactarnos por cualquier motivo
            relacionado a una compra online escribanos a info@enerlife.com
            indicando su numero de pedido.
          </p>
          <ul className="contact-info">
            <li>
              <a href="tel:011 1234 5678">011 1234-5678</a>
            </li>
            <li>
              <a href="mailto:consultas@enerlife.com">consultas@enerlife.com</a>
            </li>
            <li>Av. Siempreviva 123</li>
          </ul>
        </div>
        <div className="form-block">
          <form action="" method="POST">
            <div>
              <label for="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label for="email">Correo</label>
              <input type="text" name="email" id="email" />
            </div>
            <div>
              <label for="phone">Teléfono</label>
              <input type="text" name="phone" id="phone" />
            </div>
            <div>
              <label for="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="btn" type="submit" value="Enviar">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
