import GenProductos from './GenProductos'
import TopBar from './TopBar'
import MenuBar from './MenuBar'
import Banner from './Banner'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Cereales (){
    return (
        <>

            <TopBar />
            <MenuBar />
            <Banner />

            <div className="tienda-box">
                <div className="select-cat">
                    <h3>Categorias</h3>
                    <li><Link to="/almacen">Almacén</Link></li>
                    <li><Link to="/dulces">Dulces</Link></li>
                    <li><Link to="/cereales">Cereales y legumbres</Link></li>
                    <li><Link to="/especias">Especias</Link></li>
                    <li><Link to="/snacks">Snacks</Link></li>
                    <li><Link to="/untables">Untables</Link></li>
                    <li><Link to="/harinas">Harinas y premezclas</Link></li>
                    <li><Link to="/infusiones">Infusiones</Link></li>
                    <li><Link to="/suplementos">Suplementos</Link></li>
            </div>

            <GenProductos category_id="3" />

            </div>
            

            <Footer />
        </>
    )
}

export default Cereales