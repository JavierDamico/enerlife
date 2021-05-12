import productos from './Productos'
import {useState} from 'react'

function GenProductos() {
    var [page, setPage] = useState(0)
    
    var pages = productos

    function nextPage() {
      if (page == pages.length-1) {
          return;
      }

      setPage(page + 1)
  }


    return (
        <>
            <div className="tarj-prod">
                {
                    pages[page].map(function (dato) {
                        return <div className="producto" key={dato.id}>
                            <img src={dato.photo} alt="producto" />
                            <p className="name">{dato.name}</p>
                            <p className="price">${dato.price}</p>
                        </div>
                    })
                }
            </div>

            <div>
              <button onClick={() => setPage(0)}>
                  Primera pagina
              </button>
              <button className="App-items-pagination" onClick={nextPage}>
                  Ver mas productos
              </button>
              <button onClick={() => setPage(pages.length-1)}>
                  Ultima pagina
              </button>
            </div>
        </>
    )
}

export default GenProductos

