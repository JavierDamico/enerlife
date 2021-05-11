import productos from './Productos'


function GenDestacados() {


    var pages = productos

    return (
        <>
            <div className="destacados">
                {
                    pages.map(function (dato) {
                        return <div className="prod-destacado" key={dato.id}>
                            <img src={dato.photo} alt="producto" />
                            <p>{dato.name}</p>
                        </div>
                    })
                }
            </div>
        </>)
}

export default GenDestacados