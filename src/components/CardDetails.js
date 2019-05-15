import React from 'react'
import {Row, Col} from 'reactstrap'

const CardDetails = ({imageUrl, name, brand}) => (
    <Row id="card-container" className="justify-content-center">
        <Col xs="12" md="6" lg="5" className="card" >
            <div className="brand-name">{brand}</div>
            <img src={imageUrl} alt="image"/>
            <div className="product-name">{name}</div>
        </Col>
    </Row>
)
export default CardDetails