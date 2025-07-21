import noimg from '/noimg.jpg'
const NewsCard = (props) => {
  let {title, description, imageUrl, newsUrl, author, date, source } = props;
  const secureImageUrl = imageUrl?.startsWith('http://') ? imageUrl.replace('http://', 'https://') : imageUrl;
  const secureNewsUrl = newsUrl?.startsWith('http://') ? newsUrl.replace('http://', 'https://') : newsUrl;
  return (
    <div className="card shadow h-100 d-flex flex-column position-relative">
        <div
            style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
            top: '0',
            zIndex: 1,
            }}> <span className="badge rounded-pill bg-danger">{source}</span> </div>

        <img src={
            secureImageUrl && secureImageUrl.startsWith('http')
                ? secureImageUrl
                : noimg
            }
            onError={(e) => {
            e.target.onerror = null;
            e.target.src = noimg;
            }}
            className="card-img-top"
            alt="News"
            style={{ objectFit: 'cover', height: '250px' }}/>

        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text flex-grow-1">{description}</p>
            <p className="card-text mt-2">
            <small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small>
            </p>
            <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-info fw-bold text-light mt-2">Read More</a>
        </div>
    </div>
  )
}

export default NewsCard
