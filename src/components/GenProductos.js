import productos from './Productos'

function GenProductos(props) {
   
   
    var pages = productos.filter(categ => categ.category_id == props.category_id) 
    console.log(pages)
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

