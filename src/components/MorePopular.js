import React from "react";
import { Button, Card, CardColumns, Container } from "react-bootstrap";
import card2a from "./assets/card2a.png";
import card2b from "./assets/card2b.png";
import card2c from "./assets/card2c.png";
import card2d from "./assets/card2d.png";
import styled from "styled-components";

const Styles = styled.div`
  .pop-container {
    height: auto;
    width: auto;
  }
  .more-popular {
    height: 30px;
    margin-bottom: 7%;
    margin-left: 11%;
    margin-top: 5%;
  }
  .card-col2 {
    padding: 0;
    margin-left: 10%;
  }
  .card2 {
    text-align: center;
    height: auto;
    width: auto;
  }
  .cont-img {
    width: 75%;
    height: auto;
  }
  .card2-text {
    color: #282a2b;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: 0.33px;
    line-height: 19px;
  }
  .card2-button {
    text-align: center;
  }
`;

export const MorePopular = () => (
  <Styles>
    <Container className="pop-container" fluid>
      <div className="more-popular">
        <h1>More Popular</h1>
        <br />
      </div>
      <CardColumns className="card-col2">
        <Card className="card2">
          <Card.Img
            className="cont-img"
            variant="top"
            src={card2a}
            alt="image card2a"
          />
          <Card.Body>
            <Card.Text className="card2-text">
              READY Made Turn Key Lathe - Fanuc LR Mate
            </Card.Text>
            <Button className="card2-button" variant="primary">
              View Product
            </Button>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img
            className="cont-img"
            variant="top"
            src={card2b}
            alt="image card2b"
          />
          <Card.Body>
            <Card.Text className="card2-text">
              READY Made Turn Key Lathe - Fanuc LR Mate
            </Card.Text>
            <Button className="card2-button" variant="primary">
              View Product
            </Button>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img
            className="cont-img"
            variant="top"
            src={card2c}
            alt="image card2c"
          />
          <Card.Body>
            <Card.Text className="card2-text">
              READY Made Turn Key Lathe - Fanuc LR Mate
            </Card.Text>
            <Button className="card2-button" variant="primary">
              View Product
            </Button>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img
            className="cont-img"
            variant="top"
            src={card2d}
            alt="image card2d"
          />
          <Card.Body>
            <Card.Text className="card2-text">
              READY Made Turn Key Lathe - Fanuc LR Mate
            </Card.Text>
            <Button className="card2-button" variant="primary">
              View Product
            </Button>
          </Card.Body>
        </Card>
      </CardColumns>
    </Container>
  </Styles>
);
