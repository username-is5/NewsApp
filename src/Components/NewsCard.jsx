import React from 'react'
import noimg from '/noimg.jpg'
const NewsCard = (props) => {
  let {title, description, imageUrl, newsUrl, author, date, source } = props;
  const secureImageUrl = imageUrl?.startsWith('http://') ? imageUrl.replace('http://', 'https://') : imageUrl;
  const secureNewsUrl = newsUrl?.startsWith('http://') ? newsUrl.replace('http://', 'https://') : newsUrl;
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
                    <img 
                        src={secureImageUrl && secureImageUrl.startsWith('http') ? secureImageUrl : noimg}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = noimg;
                        }}
                        className="card-img-top" 
                        alt="News" 
                     />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="text-light fw-bold btn btn-sm btn-info">Read More</a>
                    </div>
                </div>
            </div>
  )
}

export default NewsCard
