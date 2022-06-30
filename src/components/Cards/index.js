import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import genie from '../../assets/moviegenie.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
                                Have you ever heard about a movie, were debating if you wanted to see it, but wanted to see more than just a rating from your typical critic? Well, we have just the application for you! Rub the lamp, and have your wish fulfilled! The Movie Genie is an application made with a lot of determination, that will alow you to search for any movie you want and see quick reviews, a user-rating and plot-outline. Super useful, right? Just type out whatever movie you want in the search box and your set!
                            </Card.Text>
                            <div className="projectbuttons">
                            <Button href="https://tedmjablonowski.github.io/Movie-Genie/">Movie Genie Page</Button><Button href="https://github.com/TheBatMatt/Movie-Genie">Movie Genie GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div >
    );
}
