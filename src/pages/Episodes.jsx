import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../components/cards/Cards'
import InputGroup from '../components/filters/Category/InputGroup'

const Episodes = () => {
    let [id, setId] = useState(1)
    let [info, setInfo] = useState([])
    let {air_date, name} = info
    let [results, setResults] = useState([])
    let aprUrl = `https://rickandmortyapi.com/api/episode/${id}`

    useEffect(()=>{
        (async function () {
            let data = await fetch(aprUrl).then(res=>res.json());
            setInfo(data);

            let char = await Promise.all(
                data.characters.map((el)=>{
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
                    Episode : <span className='text-primary'>{name===''?"Unknown":name}</span>
                </h1>
                <h5 className="text-center">
                    Air date {air_date===''?"Unknown":air_date}
                </h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">
                        Pick Episodes
                    </h4>
                    <InputGroup name="Episode" setId={setId} total = {51}/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards page="/episodes/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Episodes