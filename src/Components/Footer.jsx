import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Shipping from '../assets/Images/Shipping.png'
import COD from '../assets/Images/COD.png'
import { paymentMode } from '../assets/Assets';

const Footer = () => {
  return (
    <div className='container'>
      <Row className='mt-3 d-flex flex-column mx-1'>
        <Col className='d-flex gx-0 shipping border'>
          <Col sm={3} md={3} className='shippingContainer'>
            <img src= {Shipping} alt="Free Shipping" style={{height:'7vh'}} />
            <p style={{fontSize: '.9em', fontWeight: '500', marginTop:'15px', marginBottom:'0px'}}>Free Shipping</p>
            <p style={{fontSize: '.8em', marginTop:'5px', color:'grey'}}>On Orders Above ₹399</p>
          </Col>
          <Col sm={3} md={3} className='shippingContainer'>
            <img src= {COD} alt="Free Shipping"  style={{height:'7vh'}} />
            <p style={{fontSize: '.9em', fontWeight: '500', marginTop:'15px', marginBottom:'0px'}}>COD Available</p>
            <p style={{fontSize: '.8em', marginTop:'5px', color:'grey'}}>@ ₹40 per Oder</p>
          </Col>
          <Col sm={6} md={6}  className='shippingContainer'>
            <p  style={{fontSize: '1.2em', fontWeight: '500'}}>Have Queries or Concerns?</p>
            <button className='contact'>CONTACT US</button>
          </Col>
        </Col>
        <Col className='border p-4'>
          <p>PAYMENT</p>
          <p>100% Payment Protection, Easy Return Policy100% Payment Protection, Easy Return Policy</p>
          <div className='d-flex'>
            {
              paymentMode.map((payment)=>{
                return(
                  <div className='border me-3' key={payment.id}>
                    {payment.mode}
                  </div>
                );
              })
            }
          </div>
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
      </Row>
      
    </div>
  )
}

export default Footer