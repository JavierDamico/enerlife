import productos from './Productos'
import {Link} from 'react-router-dom'
// import {useState} from 'react'
// import {useParams} from 'react-router-dom'

function GenProductos(props) {
   
   
    var pages = productos.filter(categ => categ.category_id == props.category_id) 



    return (
        <>
            <div className="tarj-prod">
                {
                    pages.map(function (dato) {
                        return <div className="producto" key={dato.id}>
                            <img src={dato.photo} alt="producto" />
                            <p className="name">{dato.name}</p>
                            <p className="price">${dato.price}</p>
                            <Link to={`/productos/${dato.id}`} ><button className="btn-product">Detalles</button></Link>
                            
                            <button className="btn-product">Comprar</button>

                        </div>
                    })
                }
            </div>

        </>
    )
}

export default GenProductos

