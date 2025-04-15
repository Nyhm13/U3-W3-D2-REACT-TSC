import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Result } from "../types";

const URL = "https://api.spaceflightnewsapi.net/v4/articles/";

type Params = {
  spaceId: string;
};

const Details = function () {
  const params = useParams<Params>();

  const [details, setDetails] = useState<Result | null>(null);

  const getSingleNew = async () => {
    try {
      const response = await fetch(URL + params.spaceId);
      if (response.ok) {
        const data: Result = await response.json();
        console.log("dati fetch dettagli", data);
        setDetails(data);
      } else {
        throw new Error("cado malato");
      }
    } catch (error) {
      console.log("errore", error);
    }
  };

  useEffect(() => {
    getSingleNew();
  }, []);
  useEffect(() => {
    if (details) {
      console.log("Valore aggiornato di details:", details);
    }
  }, [details]);
  return (
    <Container className="mt-5 ">
      <h1 className=" mt-5 text-center">Dettagli del articolo</h1>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          {details ? (
            <>
              <h1 className=" mt-5">
                Autore del articolo : {details.authors[0].name}
              </h1>
              <Card>
                <Card.Img variant="top" src={details.image_url} />
                <Card.Body>
                  <Card.Title>{details.title}</Card.Title>
                  <Card.Text>{details.summary}</Card.Text>
                  <Link className=" btn btn-primary" to="/">
                    Torna alla home
                  </Link>
                </Card.Body>
              </Card>
            </>
          ) : (
            <div className="text-center">
              <Spinner className=" mt-5" animation="border" variant="primary" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
