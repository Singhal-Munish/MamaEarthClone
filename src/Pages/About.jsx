import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const About = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}  

export default About