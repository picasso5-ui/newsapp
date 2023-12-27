import {Row,Col} from "react-bootstrap"

const NewsItem = ({description,title,src,url}) => {
  return (

    <Row xs={12} md={3} className="g-4">
    <Col>
    
    <div className="card bg-dark text-light mb-3" style={{maxWidth:"300px"}} >
      <img src={src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
         {description}
        </p>
        <a href={url} className="btn btn-primary">
         Read More
        </a>
      </div>
    </div>
    </Col>
    </Row>
  )
}

export default NewsItem
