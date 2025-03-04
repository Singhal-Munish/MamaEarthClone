import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { contactFormItems } from '../assets/Assets';
import { TypeAnimation } from 'react-type-animation';
import { Nav } from 'react-bootstrap';

const Contact = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <div className='contactHeading'></div>
      <div className='contactForm'>
        <div className='contactText'>
          <h1 style={{fontSize: '3.2vw', fontWeight: 'semibold', textTransform: 'capitalize'}}>Contact Form & <br /> Validation</h1>          
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                // Same substring at the start will only be typed once, initially
                '',
                1000,
                'Demonstration',
                1000,
              ]}
              speed={50}
              style={{fontSize: '2.5vw', fontWeight: 'semibold', textTransform: 'capitalize'}}
              repeat={Infinity}
            />
          <Nav.Link href='/'>
            <button className='btn btn-danger mt-3'>PortFolio</button>
          </Nav.Link>
        </div>
        <div className='contactItems'>
          <div className='contactFormHeader'>
            <span><div className='redDot'></div></span>
            <span><div className='yellowDot'></div></span>
            <span><div className='greenDot'></div></span>
          </div>
          <h4 className='text-center mt-3' style={{textTransform: 'uppercase'}}>Send me a message</h4>
          <Form onSubmit={handleSubmit} className='container'>
            <Row className='g-8 m-3'>
              {
                contactFormItems.map((items)=> {
                  return(
                    items.label=='First Name*' || items.label=='Last Name*'?
                    (
                      <Col md={6} key={items.id} className='my-2'>
                          <FloatingLabel controlId='fName' label={items.label}>
                            <Form.Control type={items.type} placeholder={items.placeholder} required={items.isRequired}/>
                          </FloatingLabel>
                      </Col>
                    ):
                    (
                      <Col md={12} key={items.id} className='mt-2'>                        
                          <FloatingLabel controlId='' label={items.label}>
                            {
                              items.label=='Type Your Message*:'?
                                (<Form.Control as="textarea" type={items.type} placeholder={items.placeholder} style={{ height: '100px' }} />):
                                (<Form.Control type={items.type} placeholder={items.placeholder} required={items.isRequired}/>)
                            }
                          </FloatingLabel>                        
                      </Col>  
                    )
                  )
                })
              }
              <Col>
                <button className='btn btn-primary my-3' type='submit' value='submit' style={{width: '100%'}}>Send</button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

    </>
  )
}

export default Contact