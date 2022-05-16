import React from "react";
import { Col, Row } from "react-bootstrap";
import burger from "../assets/burger.jpg";
import veg from "../assets/veg.png";
import "./ProductComponent.css";

function ProductComponent({ name, price, description }) {
  return (
    <div>
      <Row className="mx-0 ProductMain">
        <Col xs={12} sm={6}>
          <div className="VegImage">
            <img src={veg} alt="veg" />
          </div>
          <h2 className="ProductName"> {name}</h2>
          <p className="ProductPrice"> {price} Rs </p>
          <p className="ProductPrice"> {description} Rs </p>
        </Col>
        <Col xs={12} sm={6} className="ProductImage">
          <div className="ImageContainer">
            <img src={burger} alt="burger" className="BurgerImage" />
          </div>
          <div className="BurgerButtonText">
            <button className="AddButton">ADD</button>
            <p className="BottomText">Customisable</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductComponent;
