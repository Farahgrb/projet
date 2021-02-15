import React from "react"
import {Image,Row,Col} from "react-bootstrap"
import Cardd from "../Cardd"
import imghh from "../SS21-HERO_1800x.jpg"
import imgh from "../mmodel.jpg"
import './Home.css';

let Menimg = {
    img: imgh}
export default function Men(){

    return (
        <div>
        <h1 className="my-5">Men Clothing</h1>
             <Image src={imghh} fluid />
            <hr/>
            <Row className="mt-5">
            <Col>
            <Cardd {...Menimg} />
                </Col>
                <Col>
                <Cardd {...Menimg}/>
                </Col>
                <Col>
                <Cardd {...Menimg}/>
                </Col>
            </Row>
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
    );
}