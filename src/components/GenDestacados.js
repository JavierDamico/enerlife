import productos from './Productos'
import {Link} from 'react-router-dom'

// const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

var arrDestacados = productos.sort(() => Math.random() - 0.5)


function GenDestacados() {

    var pages = arrDestacados.slice(1, 5)
    console.log(pages)

    return (
        <>
            <div className="destacados">
                {
                    pages.map(function (dato) {
                        return <div className="prod-destacado" key={dato.id}>
                        <img src={dato.photo} alt="producto" />
                        <p className="name">{dato.name}</p>
                        <p className="price">${dato.price}</p>
                        <Link to={`/productos/${dato.id}`} ><button className="btn-product">Detalles</button></Link>
                        <button className="btn-product">Comprar</button>
                        </div>
                    })
                }
            </div>
        </>)
}

export default GenDestacados