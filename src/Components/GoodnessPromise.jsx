import React from 'react'
import PlantGoodness from '../assets/Images/PlantGoodness.avif';
import buttonImage from '../assets/Images/buttonImage.png';

const GoodnessPromise = () => {
  return (
    <>
    <div className='container'>
        <div className='GoodnessPromise gx-0'>
            <div>
                <iframe 
                    // width="560"
                    // height="315" 
                    src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103" 
                    title="YouTube video player" 
                    // frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share;"
/*                    allowfullscreen;" */
                    className='video'>
                </iframe>
                {/* <iframe src="https://www.youtube.com/watch?v=YROZybuYGUE&t=8s" frameborder="0"></iframe> */}
            </div>

            <div className='heading'>
                <h4>Our Goodness Promise</h4>
                <p></p>
                <p>
                    At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.
                </p>
            <div className='d-flex justify-content-center'>
                <button className='shopNow'>SHOP NOW</button>
                <button className='pledges'>OUR PLEDGES</button>
            </div>
            </div>
        </div>
    </div>

    <div className='container-fluid gx-0 mt-3 position-relative'>
        <img src={ PlantGoodness } alt="We Plant Goodness" className='goodnessImage'/>
        <div className='plantGoodness'>
            <p className='fs-3 mb-0'>WE PLANT GOODNESS</p>
            <div className='oval mb-1'></div>
            <p className='fs-1 fw-medium mb-0' style={{color:'#8ec854', letterSpacing: '4px'}}>883160</p>
            <p className='fs-5 lh-1 mb-1'>Trees have got life already...</p>
            <p className='fs-5 lh-1'>Everytime you buy from us, we plant more trees!</p>
                <div className='knowMore'>
                    <img src={buttonImage} alt='Know More' className='buttonImage'></img>
                </div>
        </div>
    </div>
    </>
  )
}

export default GoodnessPromise