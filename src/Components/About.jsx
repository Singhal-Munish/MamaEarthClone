import React from 'react'
import { aboutUs } from '../assets/Assets';

const About = () => {
  return (
    <>
        <div className='container-fluid mt-4' style={{backgroundColor: '#f2f2f2'}}>
          <div className='container pt-5'>
            {
              aboutUs.map((about)=>{
                return(
                  <div key={about.id}>
                    <h4> {about.heading} </h4>
                    {/* {
                      paragraphs.map((Text)=>{
                        return(
                          <p className= 'aboutText'>         
                            {Text.para}
                          </p>
                        );
                      })
                    } */}
                   
                    
                    <p className= 'aboutText'>
                      {about.para2}
                    </p>
                    <p className= 'aboutText'>
                      {about.para3}
                    </p>
                    <p className= 'aboutText'>
                      {about.para4}
                    </p>
                    <p className= 'aboutText'>
                      {about.para5}
                    </p>
                    <p className= 'aboutText'>
                      {about.para6}
                    </p>
                    <p className= 'aboutText'>
                      {about.para7}
                    </p>
                    <p className= 'aboutText'>
                      {about.para8}
                    </p>
                    <p className= 'aboutText'>
                      {about.para9}
                    </p>
                    <p className= 'aboutText'>
                      {about.para10}
                    </p>
                  </div>
              );
            })
          }

          <hr />
          <h4>Most Searched Natural Ingredients for Skin Care and Hair Care:</h4>
          <p>Some Text</p>
          <hr />
          <h4>Mamaearth Products Price List in India</h4>
          <p>Price List</p>
        </div>
        </div>
    </>
  )
}

export default About