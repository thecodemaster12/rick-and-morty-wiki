import React from 'react'
import styles from "./Cards.module.scss"
import {Link} from "react-router-dom"

const Cards = ({results ,page}) => {
  let display 
  if (results) {
    display = results.map((items)=>{
      let {id, image, name, status, species, gender, location} = items
      return( 
        <Link
        style={{textDecoration: "none"}}
         to={`${page}${id}`} className="col-lg-4 col-md-6 col-12 mb-5 position-relative" key={id}>
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="img" className={`img-fluid ${styles.img}`}/>
            <div className="content px-2">
              <div className="fs-5 mb-2 fw-bold text-dark">{name}</div>
              <div className="text-dark">{gender}</div>
              <div className="text-dark">{species}</div>
              <div className="text-dark">{location.name}</div>
            </div>
          </div>
          {(()=>{
            if (status === "Alive") {
              return(
            <div className={`badge bg-primary position-absolute ${styles.badge}`}>{status}</div>
              )
            }
            else if (status === "Dead") {
              return(
            <div className={`badge bg-danger position-absolute ${styles.badge}`}>{status}</div>
              )
            }
            else {
              return(
                <div className={`badge bg-secondary position-absolute ${styles.badge}`}>{status}</div>
                  )
            }
          })()}
        </Link>
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