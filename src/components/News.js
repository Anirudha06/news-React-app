import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  
  useEffect(() => {
    document.title=`${props.category} | News Daily`
    updateNews();// eslint-disable-next-line
  }, [])

  const updateNews = async () => {
    props.setProgress(10);
    const url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2dffdf5ce3b1440f8e8d29d128b271f5&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }
  const handlePrevClick = async () => {
    setPage(page - 1)
    updateNews();
  }
  const handleNextClick = async () => {
    setPage(page + 1)
    updateNews();
  }

  return (
    <div className='container  my-3'>
      <h1 className='text-center'style={{color: props.mode==='light'?'black':'white',marginTop:'75px',marginBottom:'-19px'}}>News Daily- {props.category} Headlines</h1><br />
      {loading && <Spinner />}
      <div className="row my-3" style={{color:props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'black' }}>
        {!loading && articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &laquo; Previous</button>
        {/* <p><b>PAGE={page=page+1}</b></p> */}
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &raquo;</button>
      </div>
    </div>
  )

}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News





