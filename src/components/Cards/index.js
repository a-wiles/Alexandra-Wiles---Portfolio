import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import genie from '../../assets/moviegenie.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blogsite from '../../assets/blogsite.png';


export default function Cards() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card.Body>
                            <Card.Title>Movie Genie</Card.Title>
                            <img src={genie} width="100%" />
                            <Card.Text>
                                Movie database used to search up movies and see reviews and cast, as well as synopsis!
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://tedmjablonowski.github.io/Movie-Genie/">Movie Genie Page</Button><Button href="https://github.com/TheBatMatt/Movie-Genie">Movie Genie GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>


                    <Col>
                        <Card.Body>
                            <Card.Title>Blog Site</Card.Title>
                            <img src={blogsite} width="100%" />
                            <Card.Text>
                            A blog website where you login to make comments but are able to view without being logged in for any blogging needs!
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://safe-bastion-86864.herokuapp.com/">Blog Site</Button><Button href="https://github.com/a-wiles/Blog-Site">Blog Site GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>

                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                </Row>

                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                </Row>
            </Container>
        </div >
    );
}
