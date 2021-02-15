import React from 'react'
import {Card,Button} from "react-bootstrap"
import './pages/Home.css';

export default function Cardd({img}){
    return(
      <div className="text" >
        <Card style={{width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>  Shirt  </Card.Title>
    <Card.Text>
    T-Shirt for all sizes available in all of our stores
    </Card.Text>
    <Button variant="primary">Buy Now</Button>
  </Card.Body>
</Card>
</div>
    )
}