import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Navbar from "../../Components/Navbar"
import Lottie from "lottie-react"
import Home_page_pic from "../../Assests/Home_page_lottie.json"
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Row className="row" style={{width:"100%"}}>
    <Col md={6} className="home__bg">
    <Lottie  style={{height:"79vh"}}  animationData={Home_page_pic}/>
    </Col>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Make your own <span style={{color:"green"}}>Resume</span></h1>
          <p>Resume building app lets get placed <span style={{color:"orange"}}>!!</span></p>
          <LinkContainer to="/make_resume">
            <Button variant="warning">
              Get started <i class="fa-solid fa-file"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
    </Row>
    </>
  );
};

export default Home;