import { useState } from "react";
import { Link } from "react-router-dom";
import Productos from "./Productos";

function Home() {
  var [search, setSearch] = useState("");
  var [results, setResults] = useState([]);

  var options = Productos;

  function getOptions(e) {
    if (e.target.value.length == 0) {
      setSearch(e.target.value);
      setResults([]);
      return;
    }

    setSearch(e.target.value);

    var resultados = options.filter(function (option) {
      return option.name.includes(e.target.value);
    });

    setResults(resultados);
  }

  return (
    <>
      <div className="barra">
        <div className="barra-busqueda">
          <form action="" method="post">
            <input
              className="searchbar"
              type="search"
              placeholder="Qué producto buscás?"
              name="search"
              value={search}
              onInput={(e) => getOptions(e)}
            />
            <button className="search-button">🔍</button>
          </form>
          <div className="results">
          {results.map((result, i) => {
            return (
              <div>
                <Link  to={`/productos/${result.id}`} key={i}>
                  {result.name}
                </Link>
              </div>
            );
          })}
                </div>
        </div>
      </div>

      
    </>
  );
}

export default Home;
