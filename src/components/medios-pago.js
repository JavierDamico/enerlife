import TopBar from './TopBar'
import MenuBar from './MenuBar'
import Banner from './Banner'
import Footer from './Footer'
import visa from '../images/visa.png'
import master from '../images/mastercard.png'
import amex from '../images/amex.png'

function MediosPago() {
    return (

        <>

            <TopBar />
            <MenuBar />
            <Banner />

            <div className="pay">
                <h2>Efectivo</h2>
                <p>Lo pagás cuando recibís el pedido.</p>

                <h2>Depósito o transferencia bancaria.</h2>
                <p>Te proporcionamos nuestro CBU o Alias para hacer el pago.</p>

                <h2>Mercadopago</h2>
                <p>Lo podés abonar con MercadoPago.</p>

                <h2>Tarjetas de crédito</h2>
                <div className="tarjetas">
                    <img src={visa} alt="Visa" />
                    <img src={master} alt="Mastercard" />
                    <img src={amex} alt="American Express" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MediosPago