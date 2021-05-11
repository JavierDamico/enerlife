import productos from './Productos'

function GenProductos() {

    var pages = productos

    return (
        <>
            <div className="tarj-prod">
                {
                    pages.map(function (dato) {
                        return <div className="producto" key={dato.id}>
                            <img src={dato.photo} alt="producto" />
                            <p className="name">{dato.name}</p>
                            <p className="price">${dato.price}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default GenProductos

