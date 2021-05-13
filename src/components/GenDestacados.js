import productos from './Productos'
import {useState} from 'react'

function GenDestacados() {

    var [page, setPage] = useState(0)

    var pages = productos

    return (
        <>
            <div className="destacados">
                {
                    pages.map(function (dato) {
                        return <div className="prod-destacado" key={dato.id}>
                            <img src={dato.photo} alt="producto" />
                            <p>{dato.name}</p>
                            <p className="price">${dato.price}</p>
                        </div>
                    })
                }
            </div>
        </>)
}

export default GenDestacados