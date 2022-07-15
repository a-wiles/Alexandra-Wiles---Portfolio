import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import genie from '../../assets/moviegenie.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blogsite from '../../assets/blogsite.png';
import employeetracker from '../../assets/employeetracker.png';
import notetaker from '../../assets/notetaker.png';
import bword from '../../assets/thebword.png';
import weathertracker from '../../assets/weathertracker.png';
import dinoadopt from '../../assets/dinoadoption.png';


export default function Cards() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card.Body>
                            <Card.Title>The B Word</Card.Title>
                            <img src={bword} width="100%" height="100%"/>
                            <Card.Text>
                                LGBTQ+ blog website to create a safe enviornment to air all opinions and find resources and other people to interact with.
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://limitless-journey-42984.herokuapp.com/">The B Word Page</Button><Button href="https://github.com/7krich/proj2">The B Word GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title>DDAA</Card.Title>
                            <img src={dinoadopt} width="100%" height="100%" />
                            <Card.Text>
                                Dinosaur Adoption Website with React
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://delusionaldinos.herokuapp.com/">Delusional Dinosaur Adoption Agency</Button><Button href="https://github.com/jjakobsons87/dino-adoption">Dinosaur Adoption GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title>Movie Genie</Card.Title>
                            <img src={genie} width="100%" height="100%" />
                            <Card.Text>
                                Movie database used to search up movies and see reviews and cast, as well as synopsis!
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://tedmjablonowski.github.io/Movie-Genie/">Movie Genie Page</Button><Button href="https://github.com/TheBatMatt/Movie-Genie">Movie Genie GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card.Body>
                            <Card.Title>Weather Tracker</Card.Title>
                            <img src={weathertracker} width="100%" height="100%" />
                            <Card.Text>
                                Website designed to show the next 7 days of weather for a given entered city.
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://a-wiles.github.io/WeatherDashboard/">Weather Tracking Page</Button><Button href="https://github.com/a-wiles/WeatherDashboard">Weather Tracking GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>


                    <Col>
                        <Card.Body>
                            <Card.Title>Blog Site</Card.Title>
                            <img src={blogsite} width="100%" height="100%" />
                            <Card.Text>
                                A blog website where you login to make comments but are able to view without being logged in for any blogging needs!
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://safe-bastion-86864.herokuapp.com/">Blog Site</Button><Button href="https://github.com/a-wiles/Blog-Site">Blog Site GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title>Note Tracker</Card.Title>
                            <img src={notetaker} width="100%" height="100%" />
                            <Card.Text>
                                Website to assist in tracking any and all notes with the ability to edit or delete notes at will.
                            </Card.Text>
                            <div className="projectbuttons">
                                <Button href="https://blooming-atoll-45008.herokuapp.com/">Note Tracker Site</Button><Button href="https://github.com/a-wiles/Note-Challenge">Note Tracker GitHub</Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
