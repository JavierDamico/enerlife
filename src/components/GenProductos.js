import productos from './Productos'

function GenProductos() {

    var pages = productos

    return (
        <>
            <div className="tarj-prod">
                {
                    pages.map(function (dato) {
                        return <div className="producto">
                            <img src={dato.photo} alt="producto" />
                            <p>{dato.name}</p>
                            <p>${dato.price}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default GenProductos

