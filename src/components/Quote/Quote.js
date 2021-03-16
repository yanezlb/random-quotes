import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Quote = ({text}) => {
    
    return (
        <Row>
            <Col lg="12" >  
                <h2 className=""> {text} </h2>
            </Col>
        </Row>
    )

}
export default Quote;