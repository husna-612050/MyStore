import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import clothingImg from "./images/clothing.jpg";
import electronicsImg from "./images/electronics.jpg";
import beautyImg from "./images/beauty.jpg";
import furnitureImg from "./images/furniture.jpg";

function HomeScreen() {
  const clothingImage = clothingImg;
  const electronicsImage = electronicsImg;
  const beautyImage = beautyImg;
  const furnitureImage = furnitureImg;
  return (
    <div className="home-screen">
      <Container fluid>
        <Row className="top-bar justify-content-between align-items-center">
          <Col md={2} className="text-center">
            <h2>MYSTORE</h2>
          </Col>
          <Col md={6} className="text-center">
            <input type="text" placeholder="Search products" />
          </Col>
          <br></br>
          <Col md={2} className="text-center">
            <Button variant="outline-dark">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={6} className="text-center">
            <h1>~Welcome to Our Store!~</h1>
            <p className="mb-4">
              Here you can find all your favorite products at great prices.
            </p>
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Col>
          <Col md={6} className="text-center"></Col>
        </Row>
        <br></br>

        {/* Bottom grid */}
        <div className="grid-container d-flex">
          <div className="grid-item text-center">
            <a href="https://www.myntra.com/?utm_source=dms_google&utm_medium=searchbrand_cpc&utm_campaign=dms_google_searchbrand_cpc_Search_Brand_Myntra_Brand_India_BM_TROAS_SOK&gclid=Cj0KCQjwi46iBhDyARIsAE3nVrZY3Ko3yd931qWtEk16qP1cYgSbIvef0TKJM20kGRBXM_rqFPdXU4UaApN3EALw_wcB">
              <img src={clothingImage} alt="Shop Clothing at MYSTORE" />
              <h4>Clothing</h4>
            </a>
          </div>
          <div className="grid-item text-center">
            <a href="https://www.nykaa.com/">
              <img src={beautyImage} alt="Shop Beauty products at MYSTORE" />
              <h4>Beauty Products</h4>
            </a>
          </div>
          <div className="grid-item text-center">
            <a href="https://www.croma.com/">
              <img src={electronicsImage} alt="Shop Electronics at MYSTORE" />
              <h4>Electronics</h4>
            </a>
          </div>
          <div className="grid-item text-center">
            <a href="https://www.pepperfry.com/">
              <img src={furnitureImage} alt="Shop Furniture at MYSTORE" />
              <h4>Furniture</h4>
            </a>
          </div>
        </div>
        {/* Footer */}
        <Row className="bottom-bar justify-content-between align-items-center">
          <Col md={2} className="text-center">
            <h2>© 2023 MYSTORE, Husna Shaikh.</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
