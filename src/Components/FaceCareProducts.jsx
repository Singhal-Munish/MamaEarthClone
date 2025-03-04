import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { cardBanners } from '../assets/Assets.jsx';

const FaceCareProducts = () => {
    
    const off = false; 
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <div className='container' id='cardBanner'>
            <h3 className='mt-5 text-black'>Best Sellers </h3>
            <Row>
                <Col sm={10} className='text-black'>
                    <p >Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey.</p>
                </Col>
                <Col sm={2}>
                    <Button variant='primary'>VIEW ALL</Button>
                </Col>
            </Row>

            <Carousel 
                id='cr'
                activeIndex={index} 
                onSelect={handleSelect} 
                variant='dark' 
                indicators= {false}
                className='mt-3'
                interval={null}
                // prevIcon={<span className='fs-3 pb-1' > {`<`} </span>}
                // nextIcon={<span className='fs-3 pb-1'> {`>`} </span>}                
            >
                {
                    cardBanners.map((banner)=> {
                        return(                            
                            <Carousel.Item key={banner.id} >
                                <div className='d-flex gx-0 column-gap-3'>
                                {
                                    banner.bannerNo.map((card)=> {
                                        return (                                                
                                            <Col xs={12} sm={6} md={4} lg={3} key={card.id} >
                                                <Card>
                                                    <p className='cardBadge'>
                                                        {card.badge}
                                                    </p>
                                                    <Card.Img variant="top" src={card.image} className="faceCardImage"/>
                                                    <Card.Body className="cardBody">
                                                        <Card.Title className='cardTitle'>
                                                            {card.title}
                                                        </Card.Title>
                                                        <div className='subTitle'>{card.subtitle}</div>
                                                        <div className='text-center'>{card.size}</div>
                                                        <div className='ratings'>
                                                            <div className='stars me-3'>{card.stars}</div>
                                                            <div className='reviews'>{card.reviews}</div>
                                                        </div>
                                                        <div className='price'>
                                                        <div className='specialPrice'>{card.specialprice}</div>
                                                        <div className='mrp'><del>{card.mrp}</del></div>
                                                        <div className='discount'>{card.discount}</div>                            
                                                        </div>
                                                    </Card.Body>
                                                    <div>
                                                        <Button variant="primary" className='addToCartBtn'>
                                                            ADD TO CART
                                                        </Button>
                                                    </div>
                                                </Card>                                 
                                            </Col>
                                        )
                                    })
                                }
                                </div>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </div>
    );
    
}

export default FaceCareProducts