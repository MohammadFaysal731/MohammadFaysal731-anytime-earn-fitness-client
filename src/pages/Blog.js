import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import QuestionImage1 from "../assets/images/others/difference-between-authorization-and-authentication.png";
import QuestionImage3 from "../assets/images/others/firebase-provide.png";
import QuestionImage2 from "../assets/images/others/using-firebase.png";
import useTitle from "../hooks/useTitle";
const Blog = () => {
  useTitle('Blog')
  return (
    <>
      <Row xs={1} md={3} className="g-4 p-3 m-0">
        <Col>
          <Card>
            <Card.Img variant="top" src={QuestionImage1} />
            <Card.Body>
              <Card.Title>
                **** Difference between authorization and authentication ?
              </Card.Title>
              <ol>
                <li>
                  Authorization hosa kawek kono kaj koranr jono ba kono
                  resources bavohan korar korte parar permission deyar pokiya.
                  Ar Authentication hosa kono user k access access deyan system.{" "}
                </li>
                <li>
                  Authorization hosa user validated ki na sata check kora .Ar
                  Authentication user k verified kora
                </li>
                <li>
                  Authorization karjakom Authentication ar por hoy.Ar
                  Authentication agi hoy ter por Authorization hoy.
                </li>
                <li>
                  Authorization user ar anumote nirdaron kora.Ar Authentication
                  proman nirdaron kora j user sothek ki na.
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={QuestionImage2} />
            <Card.Body>
              <Card.Title>
                **** Why are you using firebase ? What other options do you have
                to implement authentication?
              </Card.Title>
              <ol>
                <li>
                  karon hosa Authentication o Authorization korte suvida hoy.
                </li>
                <li>
                  firebase ar mado may email and password,google,github,facebook
                  sing in system banate suvida hoy.
                </li>
                <h6>
                  What other options do you have to implement authentication ?
                </h6>
                <li>
                  Other options is cards, retina,scans,voice and
                  fingerprints.sadaron noto Authentication system kono ekte
                  server ar mado may hoya tha k.
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={QuestionImage3} />
            <Card.Body>
              <Card.Title>
                **** What other services does firebase provide other than
                authentication ?
              </Card.Title>
              <ol>
                <li>Parse open source backend platform.</li>
                <li>Back4app parse Hosting platform.</li>
                <li>
                  Kinvey mobile backend as a service (mBaas)for the enterprise.
                </li>
                <li>Backendless mobile backend and api services platform.</li>
                <li>kumulos api performance management.</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Blog;
