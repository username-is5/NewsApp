import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import NewsCard from './NewsCard';
const News = (props) => {
  const [articles,setArticles]= useState([])
  const [totalResults,setTotal]=useState(0)

  const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

  const updateNews= async()=>{
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);  
    setTotal(data.totalResults);
  }
   useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsWave`;
        updateNews(); 
    }, [])

  return (
    <div>
       <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '50px' }}>NewsWave - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsCard title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
    </div>
  )
}
News.defaultProps = {
    country: 'in',
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

export default News
