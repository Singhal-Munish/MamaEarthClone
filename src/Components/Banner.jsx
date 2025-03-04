import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { carousels } from '../assets/Assets';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className='g-0'>
      <Carousel 
        id='sampleSlide' 
        activeIndex={index} 
        onSelect={handleSelect} 
        variant='light' 
        indicators={false}
      >
        {
          carousels.map((items)=>{
            return(
              <Carousel.Item key={items.id} indicators={false} interval={1500}>
                <img src={items.image} className='bannerImage'/>          
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </Container>
  )
}

export default Banner