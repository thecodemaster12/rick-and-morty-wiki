import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css'
import Filters from "./components/filters/Filters"
import Cards from "./components/cards/Cards"
import { useEffect, useState } from "react"
import Pagination from "./components/pagination/Pagination"
import Search from "./components/search/Search"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Episodes from "./pages/Episodes"
import Location from "./pages/Location"

function App() {
  return(
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/location" element={<Location />}/>
      </Routes>
    </Router>
  )
}

const  Home = () => {
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
