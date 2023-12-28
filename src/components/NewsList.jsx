import { useState, useEffect } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import image from '../assets/news.jpg'
const NewsList = ({ category }) => {
  const [articles, setArticle] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8d233ce53f7a461cb5f7494755c15a4c`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setArticle(data.articles));
      setIsLoading(false);
    } catch (error) {
      console.log(error, "error occured");
    } 
  }, [category]);

  const isempty = articles?.length === 0;

  if (isempty) {
    return <p>No news at the moment!</p>;
  }

  return (
    <div className="my-5">
      <Row>
        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          articles?.map((article, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card
                style={{ width: "300px", marginRight: "10px", height: "350px" }}
                className="card mb-3 bg-dark text-white"
              >
                <Card.Body className="card-Body">
                  <Card.Title>
                    {article?.title && article.title.slice(0, 20)}
                  </Card.Title>
                  <Card.Text>
                    {article?.description && article.description.slice(0, 90)}
                    
                      <img
                    
                        src={article?.urlToImage?article.urlToImage:image}
                        alt="articles"
                        style={{ maxWidth: "200px" }}
                      />
                    
                  </Card.Text>

                  <a href={article?.url && article.url} target="_blank" className="text-warning">
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default NewsList;
