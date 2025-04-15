import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


interface Article {
    id: string;
    title: string;
    published_At: string;
    imageUrl: string;
    summary: string;
  }  

//  interface Article {
//     count:    number;
//     next:     string;
//     previous: null;
//     results:  Result[];
// }

//  interface Result {
//     id:           number;
//     title:        string;
//     authors:      Author[];
//     url:          string;
//     image_url:    string;
//     news_site:    string;
//     summary:      string;
//     published_at: Date;
//     updated_at:   Date;
//     featured:     boolean;
//     launches:     Launch[];
//     events:       any[];
// }

//  interface Author {
//     name:    string;
//     socials: Socials | null;
// }

//  interface Socials {
//     x:         string;
//     youtube:   string;
//     instagram: string;
//     linkedin:  string;
//     mastodon:  string;
//     bluesky:   string;
// }

//  interface Launch {
//     launch_id: string;
//     provider:  string;
// }


function Main() {

    const [articles, setArticles]=useState<Article[]>([])
    const [loading,setLoading]=useState(true)

   useEffect(()=>{
     const URL='https://api.spaceflightnewsapi.net/v4/articles'

     const fetchArticles=()=>{
        fetch(URL)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }else {
                throw new Error('cado malato')
            }
        })
        .then((data)=>{
            console.log('dati dalla fetch',data)
            setArticles(data.results)
            setLoading(false)
            console.log('articoli', articles)

        })
        .catch((err)=>{
            console.log ('erorre ', err)
        })
     }

     fetchArticles()
   },[])
   useEffect(() => {
    console.log("Articoli aggiornati:", articles);
  }, [articles]);

  return (
    <Container className="mt-4">
      <Row>
      {articles!.map((article) => (
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
                  {article.published_At}
                </Card.Text>
                <Card.Text>{article.summary.substring(0,100)}...</Card.Text>
                <Button variant="primary" href={`/articles/${article.id}`}>
                  Leggi di più
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Main;
