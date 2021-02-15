import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./shopping.jpg"  
 



export default function Carr(){
    return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption className="bg-dark">
      <h3>Welcome To Our Clothes Store</h3>
      <p>We provide have the top clothing quality out there</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-dark">
      <h3>Here we Have clothes for Men</h3>
      <p>All Men wear are available in our store and you can shippable them everywhere</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-dark">
      <h3>As well for Women</h3>
      <p>Find your unique style</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)}