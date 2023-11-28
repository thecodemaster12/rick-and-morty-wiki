// "locations": "https://rickandmortyapi.com/api/location"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../components/cards/Cards'
import InputGroup from '../components/filters/Category/InputGroup'

const Location = () => {
    let [id, setId] = useState(1)
    let [info, setInfo] = useState([])
    let {type, dimension, name} = info
    let [results, setResults] = useState([])
    let aprUrl = `https://rickandmortyapi.com/api/location/${id}`

    useEffect(()=>{
        (async function () {
            let data = await fetch(aprUrl).then(res=>res.json());
            setInfo(data);

            let char = await Promise.all(
                data.residents.map((el)=>{
                    return fetch(el).then(res=>res.json());
                })
            )
            setResults(char)
        })()
    },[aprUrl])
  return (
    <>
        <div className="container">
            <div className="row mb-4">
                <h1 className="text-center mb-2">
                    Location : <span className='text-primary'>{name===''?"Unknown":name}</span>
                </h1>
                
                <h5 className="text-center">
                Dimension : {dimension===''?"Unknown":dimension}
                </h5>

                <h6 className="text-center">
                Type : {type===''?"Unknown":type}
                </h6>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">
                        Pick Location
                    </h4>
                    <InputGroup name="Location" setId={setId} total = {126}/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/location/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Location