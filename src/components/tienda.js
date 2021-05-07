import TopBar from './TopBar'
import MenuBar from './MenuBar'
import Banner from './Banner'
import GenProductos from './GenProductos'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Tienda() {
    return (
        <>

            <TopBar />
            <MenuBar />
            <Banner />

            <div className="tienda-box">
                <div className="select-cat">
                    <h3>Categorias</h3>
                    <li><Link to="/almacen">Almacen</Link></li>
                    <li><Link to="/dulces">Dulces</Link></li>
                    <li><Link to="/cereales">Cereales y legumbres</Link></li>
                    <li><Link to="/especias">Especias</Link></li>
                    <li><Link to="/snacks">Snacks</Link></li>
                    <li><Link to="/untables">Untables</Link></li>
                    <li><Link to="/harinas">Harinas y premezclas</Link></li>
                    <li><Link to="/infusiones">Infusiones</Link></li>
                    <li><Link to="/suplementos">Suplementos</Link></li>
                </div>

                <GenProductos />

            </div>
            <div className="more">
                <input className="btn" type="submit" value="Ver más" />
            </div>

            <Footer />
        </>
    )
}

export default Tienda