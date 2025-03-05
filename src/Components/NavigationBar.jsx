import React from 'react';
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { images } from '../assets/Assets';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosSearch } from "react-icons/io";
import { menuItems } from '../assets/Assets';

const NavigationBar = () => {
  return (
    <div className='navBar'>
      <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="md" className='navBarHeight'>
        <Container className=''>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
          <Nav.Link href="/">
            <img src={images.Logo} className='logo'/>
          </Nav.Link>          
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Nav.Link href="/">
                  <img src={images.Logo} className='logo'/>
                </Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Form className="d-flex searchBox">
                    <Form.Text><IoIosSearch className='me-1 fs-5'/></Form.Text>
                    <Form.Control type="search" placeholder="Search" className="" aria-label="Search" />
                    <Button variant='info' className='searchButton text-white'><IoIosSearch className='me-1 fs-5'/>Search</Button>
                  </Form>
                  <Nav.Link href="/" className='ms-3'>
                    <img src={images.InsiderButton} className='insider'/>
                  </Nav.Link>
                </Navbar.Collapse>
                <div className='d-flex align-items-center'>
                  <IoCartOutline className='text-primary fs-5 ms-3' />
                  {/* <Nav.Link href="/contact">Cart</Nav.Link> */}
                  <a href="../contact">Cart</a>
                </div>
                <div className='d-flex align-items-center'>
                <FaRegUser className='text-primary fs-5 ms-3' />
                  <NavDropdown title="Login" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/projects">NYE Bash 2025</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/projects">Resume</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/projects">E-Comm</NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>          
        </Container>
      </Navbar>
      <Navbar bg="light" data-bs-theme="light" className='menuContainer'>
        <Container fluid>
          <Nav className="me-auto menu">
            {
              menuItems.map((items)=> {
                  return (
                      <div key={items.id}>
                          <Nav.Link href={items.href} className='p-2'> {items.name} </Nav.Link>
                          <Nav.Link className='menuItems p-0' ></Nav.Link>
                      </div>
                  );
              })
            }
          </Nav>
        </Container>
    </Navbar>
    </div>
  );
};

export default NavigationBar