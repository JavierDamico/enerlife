import TopBar from './TopBar'
import MenuBar from './MenuBar'
import Footer from './Footer'


function ComoComprar() {
    return (
        <>
            <TopBar />

            <MenuBar />
            <section class="info">
                <div>
                    <h2>En EnerLife comprar es muy fácil y rápido.</h2>
                    <h3>Seguí éstos pasos para realizar tu pedido.</h3>
                </div>
                <div class="instrucciones">
                    <ul>
                        <li>Buscá el producto deseado en la lista de categorías o en la barra de busqueda ubicada en la parte superior de la página.</li>
                        <li>Al ubicar el producto hacé click en comprar. También podes modificar las cantidades que querés comprar.</li>
                        <li>A medida que vayas comprando los producto se irán agregando al icono del carrito ubicado en la esquina superior derecha. Podés hacer click en el carrito en cualquier momento para ver el listado de tu pedido y modificarlo a gusto.</li>
                        <li>Una vez seleccionados todos los productos haz click en el icono del carrito y luego en el boton comprar.</li>
                        <li>Completá los datos que se te solicitan a continuación.</li>
                        <li>Al finalizar hacer click en “comprar” y en breves minutos recibirás por correo electrónico una confirmación de recepción con copia detallada del pedido realizado. Posteriormente nos comunicamos para avisarte que salimos a entregar el pedido.</li>
                    </ul>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default ComoComprar