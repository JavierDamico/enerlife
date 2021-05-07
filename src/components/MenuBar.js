
import { Link } from 'react-router-dom'

function MenuBar() {
    return (
        <div className="contenedor">
            <div>
                <nav className="navegacion">
                    <ul className="menu">
                        <li><Link to="#">Categorias</Link>
                            <ul className="submenu">
                                <li><Link to="#">Almacen</Link></li>
                                <li><Link to="#">Dulces</Link></li>
                                <li><Link to="#">Cereales y legumbres</Link></li>
                                <li><Link to="#">Especias</Link></li>
                                <li><Link to="#">Snacks</Link></li>
                                <li><Link to="#">Untables</Link></li>
                                <li><Link to="#">Harinas y premezclas</Link></li>
                                <li><Link to="#">Infusiones</Link></li>
                                <li><Link to="#">Suplementos</Link></li>
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