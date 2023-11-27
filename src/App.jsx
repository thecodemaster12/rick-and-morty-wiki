import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css'
import Filters from "./components/filters/Filters"
import Cards from "./components/cards/Cards"
import { useEffect, useState } from "react"

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let {info , results} = fetchedData;

  console.log(results);
  
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  
  
  useEffect(()=>{
    (async function(){
      let data = await fetch(apiUrl).then(res=>res.json())
      setFetchedData(data)
    })()
  },[apiUrl])
  
  return (
    <>
      <h1 className="text-center ubuntu fw-bolder my-4">Rick and Morty <span className="text-primary">Wiki</span></h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters/>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
