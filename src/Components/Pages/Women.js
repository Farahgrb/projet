import React from "react"
import {Image,Row,Col} from "react-bootstrap"
import Cardd from "../Cardd"
import imgf from "../0802-women-s-lp-hero-dt-reduced-data.jpg"
import imgff from "../wmodel.jpg"
import './Home.css';


let Womenimg = {
    img: imgff}
export default function Men(){

    return (
        <div >
            <h1 className="my-5">Women Clothing</h1>
            <Image src={imgf} fluid />
            <hr/>
            <Row className="mt-5">
            <Col>
                    <Cardd {...Womenimg}/>
                </Col>
                <Col>
                    <Cardd {...Womenimg}/>
                </Col>
                <Col>
                    <Cardd {...Womenimg}/>
                </Col>
            </Row>
            <Row>
            <Col>
                    <Cardd {...Womenimg}/>
                </Col>
                <Col>
                    <Cardd {...Womenimg}/>
                </Col>
                <Col>
                    <Cardd {...Womenimg}/>
                </Col>
            </Row>
        </div>
    );
}