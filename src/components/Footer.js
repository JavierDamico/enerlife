import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <>
            <hr />

            <footer>
                <div className="footer-links">
                    <div className="left-footer">
                        <aside className="redes-sociales">
                            <h3>Delivery propio</h3>
                            <div className="delivery">
                                <p>Contamos con delivery propio en CABA, recibís tu pedido en el día.
                        </p>
                            </div>
                        </aside>
                    </div>
                    <div className="central-footer">
                        <aside className="info-links">
                            <h3>Enlaces</h3>
                            <ul className="list-enlaces">
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/tienda">Tienda</Link></li>
                                <li><Link to="/promociones">Promociones</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="right-footer">
                        <aside className="info-links">
                            <h3>Información</h3>
                            <ul className="list-enlaces">
                                <li><Link to="/politicas-envio">Politicas de envío</Link></li>
                                <li><Link to="/medios-pago">Medios de pago</Link></li>
                                <li><Link to="/como-comprar">Cómo hacer tu pedido</Link></li>
                            </ul>
                        </aside>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p><FacebookIcon className="social-links" fontSize="large"/><InstagramIcon className="social-links" fontSize="large"/><TwitterIcon className="social-links" fontSize="large"/></p>
                </div>
            </footer>

        </>
    )
}

export default Footer