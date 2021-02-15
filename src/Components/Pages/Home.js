import React from "react";
import { Row, Col, Jumbotron,Container } from "react-bootstrap";
import Carr from "../Carr.js";
import Cardd from "../Cardd.js";
import './Home.css';
import imgh from "../men_1.5f0f380a.webp"

let Menimg = {
    img: imgh}



export default function Home(){
    return(
<div>        
<div className="Carou">
        <Jumbotron fluid>
<div className="text">
  <Container >
    <h1 >Clothes Store</h1>
    <p>
    Welcome To the the #N°1 Selling Clothes store in Tunisia.
    </p>
  </Container>
  </div>
</Jumbotron>
</div>
<div className="Carou">
<Carr/>
</div>
<div className="Carou">
<Row>
                <Col>
                    <Cardd {...Menimg}/>
                </Col>
                <Col>
                    <Cardd {...Menimg}/>
                </Col>
                <Col>
                    <Cardd {...Menimg}/>
                </Col>
</Row>
</div>
</div>
    )
}
