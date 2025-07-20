import React from 'react'

const NewsCard = (props) => {
  let {title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }><span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AImage_not_available.png&psig=AOvVaw1KjcGpaAO4bQrj5UGzJwa-&ust=1753092298562000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLizhvSXy44DFQAAAAAdAAAAABAE" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
  )
}

export default NewsCard
