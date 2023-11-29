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
import CardDetails from "./components/cards/CardDetails"
import Footer from "./components/Footer/Footer"

function App() {
  return(
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<CardDetails />}/>

        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/episodes/:id" element={<CardDetails />}/>

        <Route path="/location" element={<Location />}/>
        <Route path="/location/:id" element={<CardDetails />}/>
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
    <h1 className="text-center mb-4">Characters</h1>
    <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">
          <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
      <Footer/>
    </>
  )
}

export default App
