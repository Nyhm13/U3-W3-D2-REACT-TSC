import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { APIResponse } from "../types";
import { Link } from "react-router-dom";

const URL = "https://api.spaceflightnewsapi.net/v4/articles";

function Main() {
  const [articles, setArticles] = useState<APIResponse | null>(null);

  const getNews = async () => {
    try {
      const response = await fetch(URL);

      if (response.ok) {
        const data: APIResponse = await response.json();
        console.log("dati dalla fetch", data);
        setArticles(data);
      } else {
        throw new Error("cado malatucci");
      }
    } catch (err) {
      console.log("errore", err);
    }
  };

  useEffect(() => {
    //  const URL='https://api.spaceflightnewsapi.net/v4/articles'

    //  const fetchArticles=()=>{
    //     fetch(URL)
    //     .then((response)=>{
    //         if(response.ok){
    //             return response.json()
    //         }else {
    //             throw new Error('cado malato')
    //         }
    //     })
    //     .then((data)=>{
    //         console.log('dati dalla fetch',data)
    //         setArticles(data.results)

    //         console.log('articoli', articles)

    //     })
    //     .catch((err)=>{
    //         console.log ('erorre ', err)
    //     })
    //  }
    getNews();
    //  fetchArticles()
  }, []);
  //    useEffect(() => {
  //     console.log("Articoli aggiornati:", articles);
  //   }, [articles]);

  return (
    <Container className="mt-4">
      <Row>
        {!articles && (
          <div className=" justify-content-center">
            <Spinner animation="border" variant="primary " />
          </div>
        )}

        {articles &&
          articles.results.map((article) => {
            return (
              <Col md={4} className="mb-4" key={article.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={article.image_url}
                    alt={article.title}
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                      <strong>Data di pubblicazione:</strong>{" "}
                      {article.published_at.slice(0, 10) +
                        "  " +
                        article.published_at.slice(12, 19)}
                    </Card.Text>
                    <Card.Text>
                      {article.summary.substring(0, 100)}...
                    </Card.Text>
                    <Link
                      className="btn btn-primary"
                      to={"/details/" + article.id}
                    >
                      Leggi di più
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default Main;
