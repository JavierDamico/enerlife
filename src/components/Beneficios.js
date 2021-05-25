import delivery from '../images/delivery.svg'
import shield from '../images/shield.svg'
import {Link} from 'react-router-dom'

function Beneficios() {
    return (
        <>
            <div className="beneficios">
                <div className="conteiner-tarj-benef">
                    <Link to="/como-comprar"><img src={delivery} alt="delivery" /></Link>
                    <div className="aside-box">
                        <h3>Envíos a todo el país</h3>
                        <p>Comprá desde la comodidad de tu casa</p>
                    </div>
                </div>
                <div className="conteiner-tarj-benef">
                    <Link to="/como-comprar"><img src={shield} alt="compra segura" /></Link>
                    <div className="aside-box">
                        <h3>Seguridad</h3>
                        <p>Compras protegidas por Mercado Pago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Beneficios