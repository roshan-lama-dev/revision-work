import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
export const HomePage = () => {
  return (
    <MainLayout>
      <nav class="navbar">
        <a href="#" class="logo">
          Riteway Food Service
        </a>
        <ul class="nav-links">
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </nav>
      <Carousel className="homecarousel">
        <Carousel.Item>
          <Row className="">
            <Col className="d-flex flex-column align-items-center justify-content-center">
              <h3>
                Welcome to <span className="text-danger">Riteway</span> Food
                Service
              </h3>
              <p>Your one-stop-shop for all your catering needs</p>
              <Button>Order Now</Button>
            </Col>
            <Col className="bgFirstCarousel">jeiohjsif</Col>
          </Row>
          {/* <img
            className="carouselphoto"
            src="https://images.unsplash.com/photo-1611864581049-aca018410b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"
            alt="First slide"
          /> */}
          {/* <h1>dfs</h1> */}
          {/* <Carousel.Caption>
            <p className="text-white text-center">sdfsfsd</p>
            <h3>First slide label</h3>
            <p>
              Nulla sdfdsvitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        {/* <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>

      <section class="hero">
        <div class="hero-background">
          <img
            src="https://images.unsplash.com/photo-1547637205-fde0c9011f9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Fresh produce header image"
          />
        </div>
        <div class="hero-content">
          <h1>Your One-Stop-Shop for Quality Fresh Foods and Catering Needs</h1>
          <p>
            At Riteway Food Service, we deliver the freshest and highest quality
            products right to your doorstep. Shop now to experience the
            difference.
          </p>
          <a href="#" class="btn-primary">
            Shop Now
          </a>
        </div>
      </section>
      <section class="section-1">
        <div class="section-1-content">
          <h2>About Us</h2>
          <p>
            Riteway Food Service is a family-owned wholesale business that has
            been supplying a wide range of quality fresh foods and catering
            needs since 1985. We pride ourselves on providing exceptional
            service and delivering the freshest products to our customers.
          </p>
          <a href="#contact" class="btn-secondary">
            Contact Us
          </a>
        </div>
        <div class="section-1-image">
          <img
            src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="About Us image"
          />
        </div>
      </section>
      <section class="products" id="products">
        <h2 class="section-title">Our Products</h2>
        <div class="product-list">
          <div class="product-item">
            <img
              src="https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product 1"
            />
            <h3>Product 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
          <div class="product-item">
            <img
              src="https://images.unsplash.com/photo-1592892111425-15e04305f961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product 2"
            />
            <h3>Product 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
          <div class="product-item">
            <img src="product-3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
          <div class="product-item">
            <img src="product-4.jpg" alt="Product 4" />
            <h3>Product 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-content">
          <div class="logo">
            <img src="logo.png" alt="Riteway Food Service Logo" />
          </div>
          <div class="contact">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>Sydney, NSW 2000</p>
            <p>Phone: (02) 1234 5678</p>
            <p>Email: info@ritewayfoods.com.au</p>
          </div>
          <div class="social">
            <h3>Follow Us</h3>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright &copy; 2023 Riteway Food Service</p>
        </div>
      </footer>
    </MainLayout>
  );
};
