import {Link} from 'react-router-dom'

function Banner() {
    return (
        <div className="banner">
            <div className="titulo-boton">
                <h1>Tienda EnerLife</h1>
                <Link to="/tienda"><span className="boton-comprar">Empezá a comprar</span></Link>
            </div>
        </div>
    )
}
export default Banner