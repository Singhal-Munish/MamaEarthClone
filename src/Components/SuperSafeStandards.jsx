import React from 'react';
import Tested from '../assets/Images/Tested.png';
import Approved from '../assets/Images/Approved.jpg';
import Certified from '../assets/Images/Certified.jpg';
import { Row, Col } from 'react-bootstrap';

const SuperSafeStandards = () => {
  return (
    <div className='container'>
      <p className='fs-4 text-black text-center mt-4'>Super Safe Standards</p>
      <Row className='mt-4'>
        <Col className='d-flex align-items-center'>
          <Col sm={4} md={4}>
            <img src={Tested} alt="Dermatologically Tested" />
          </Col>
          <Col sm={8} md={8}>
            <p className='fs-5 mb-1 fw-medium'>Dermatologically Tested</p>
            <p>We ensure each product is tested clinically on the sensitive human skin to ensure that it is not allergic.</p>
          </Col>
        </Col>
        <Col className='d-flex align-items-center'>
          <Col sm={4} md={4}>
            <img src={Approved} alt="Dermatologically Tested" />
          </Col>
          <Col sm={8} md={8}>
            <p className='fs-5 mb-1 fw-medium'>FDA Approved</p>
            <p>We ensure each product is tested clinically on the sensitive human skin to ensure that it is not allergic.</p>
          </Col>
        </Col>
        <Col className='d-flex align-items-center'>
          <Col sm={4} md={4}>
            <img src={Certified} alt="Dermatologically Tested" />
          </Col>
          <Col sm={8} md={8}>
            <p className='fs-5 mb-1 fw-medium'>Made Safe Certified</p>
            <p>We ensure each product is tested clinically on the sensitive human skin to ensure that it is not allergic.</p>
          </Col>
        </Col>
      </Row>        
    </div>
  )
  }

export default SuperSafeStandards