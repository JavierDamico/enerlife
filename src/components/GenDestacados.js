import destacados from './destacados'


function GenDestacados() {


    var pages = destacados

    return (
        <>
            <div className="destacados">
                {
                    pages.map(function (dato) {
                        return <div className="prod-destacado">
                            <img src={dato.photo} alt="producto" />
                            <p>{dato.name}</p>
                        </div>
                    })
                }
            </div>
        </>)
}

export default GenDestacados