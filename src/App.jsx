import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css'
import Filters from "./components/filters/Filters"
import Cards from "./components/cards/Cards"
import { useEffect, useState } from "react"
import Pagination from "./components/pagination/Pagination"
import Search from "./components/search/Search"

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let [search, setSearch] = useState('')
  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')
  let {info , results} = fetchedData;
  
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
  
  useEffect(()=>{
    (async function(){
      let data = await fetch(apiUrl).then(res=>res.json())
      setFetchedData(data)
    })()
  },[apiUrl])
  
  return (
    <>
      <h1 className="text-center ubuntu fw-bolder my-4">Rick and Morty <span className="text-primary">Wiki</span></h1>

    <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">
          <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
    </>
  )
}

export default App
