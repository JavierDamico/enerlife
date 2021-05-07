import carrito from '../images/shopping_cart_white_48dp.svg'
import { Link } from 'react-router-dom'

function TopBar() {

    return (

        <header>
            <div id="top-bar">
                <div className="logo">
                    <span><Link to="/">EnerLife</Link></span>
                </div>
                <div className="barra">
                    <form action="" method="post">
                        <input className="searchbar" type="search" placeholder="Qué producto buscás?" />
                        <button className="search-button">🔍</button>
                    </form>
                </div>
                <div>
                    <Link to="carrito.html"><img className="logo-carrito" src={carrito} alt="Carrito" /></Link>
                </div>
            </div>
        </header>

    )
}


export default TopBar
