import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div>
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
            borderRadius: '0'
          }}>

            <span className=" badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <a href={newsUrl} target="_blank" rel="noreferrer">

            <img onClick={{ href: 'newsUrl' }} src={!imageUrl ? `https://cdn.mos.cms.futurecdn.net/UoGBcodZ7kRZ9s6o5n3HuX-1200-80.jpg` : imageUrl} className="card-img-top .hover-zoom " alt="..." />
            <div>
              <div
                className='mask'
                style={{
                  background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)',
                }}
              ></div>
            </div>
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{!description ? `The Galaxy Watch 5 Pro is the high-end variant in Samsung's new Wear OS smartwatch lineup featuring a titanium case and durable Sapphire Crystal glass....` : description}...</p>
            <p className="card-text "><small className="text-secondary">By {!author ? 'unkonwn' : author} on {new Date(date).toGMTString()} ago</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsItem
