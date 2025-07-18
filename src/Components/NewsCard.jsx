import React from 'react'

const NewsCard = () => {
  return (
    <>
      <div className="card m-5" style={{ width: "18rem"}}>
        <img src="/" className="card-img-top" alt="image"/>
        <div className="card-body">
            <h5 className="card-title">Title</h5>
            <p className="card-text">Headlines</p>
            <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}

export default NewsCard
