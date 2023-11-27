import React from 'react'
import styles from "./Cards.module.scss"

const Cards = ({results}) => {
  let display 
  if (results) {
    display = results.map((items)=>{
      let {id, image, name, status, species, gender, location} = items
      return( 
        <div className="col-6 mb-5 position-relative" key={id}>
          <div className={styles.cards}>
            <img src={image} alt="img" className={`img-fluid ${styles.img}`}/>
            <div className="content px-2">
              <div className="fs-5 mb-2 fw-bold">{name}</div>
              <div className="">{gender}</div>
              <div className="">{species}</div>
              <div className="">{location.name}</div>
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