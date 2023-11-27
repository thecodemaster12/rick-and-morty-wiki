import React from 'react'
import styles from "./Cards.module.scss"

const Cards = ({results}) => {
  let display 
  if (results) {
    display = results.map((items)=>{
      let {id, image, name, status, species, gender, location} = items
      return( 
        <div className="col-3 mb-5 position-relative" key={id}>
          <div className="">
            <img src={image} alt="img" className='img-fluid'/>
            <div className="content">
              <div className="fs-5 mb-2 fw-bold">{name}</div>
              <div className="">{gender}</div>
              <div className="">{species}</div>
              <div className="">{location.name}</div>
            </div>
          </div>
            <div className={`${styles.badge} badge bg-primary position-absolute`}>{status}</div>
        </div>
      )
    })
  }
  else{
    display = "No Data Found"
  }

  return (
    <>
      {display}
    </>
  )
}

export default Cards