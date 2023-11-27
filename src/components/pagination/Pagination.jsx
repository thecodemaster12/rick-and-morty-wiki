import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {

  // let previous = () => {
  //   if (pageNumber === 1) return;
  //   setPageNumber(x=>x-1)
  // } 

  // let next = () => {
  //   setPageNumber(x => x+1)
  // }

  return (
    <>
    {/* <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={previous} className='btn btn-primary'>Previous</button>
      <button onClick={next} className='btn btn-primary'>Next</button>
    </div> */}

    <ReactPaginate 
    className="pagination justify-content-center gap-4 my-4"
    forcePage={pageNumber===1?0:pageNumber-1}
    nextLabel="Next"
    previousLabel="Prev"
    nextClassName='btn btn-primary  text-secondary'
    previousClassName='btn btn-primary  text-secondary'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    onPageChange={(data)=>{
      setPageNumber(data.selected+1)
    }}
    pageCount={info?.pages} />
    </>
  )
}

export default Pagination