
import { Link } from 'react-router-dom'

function MenuBar() {
    return (
        <div className="contenedor">
            <div>
                <nav className="navegacion">
                    <ul className="menu">
                        <li><Link to="#">Categorias</Link>
                            <ul className="submenu">
                                <li><Link to="/almacen">Almacen</Link></li>
                                <li><Link to="/dulces">Dulces</Link></li>
                                <li><Link to="/cereales">Cereales y legumbres</Link></li>
                                <li><Link to="/especias">Especias</Link></li>
                                <li><Link to="/snacks">Snacks</Link></li>
                                <li><Link to="/untables">Untables</Link></li>
                                <li><Link to="/harinas">Harinas y premezclas</Link></li>
                                <li><Link to="/infusiones">Infusiones</Link></li>
                                <li><Link to="/suplementos">Suplementos</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <ul className="menu">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/tienda">Tienda</Link>
                    </li>
                    <li>
                        <Link to="/promociones">Promociones</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar