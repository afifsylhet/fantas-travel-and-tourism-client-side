import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white">Fantasy Travel and Tourism</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className="nevuderline">
                                <Nav.Link href="#action2" className="text-white nevtour ">Home</Nav.Link>
                            </NavLink>

                            <NavLink to="/about" className="nevuderline">
                                <Nav.Link href="#action2" className="text-white nevtour">About</Nav.Link>
                            </NavLink>

                            <NavLink to="/myOrders" className="nevuderline">
                                <Nav.Link href="#action2" className="text-white nevtour">My Oders</Nav.Link>
                            </NavLink>

                            <NavLink to="/manageOrders" className="nevuderline">
                                <Nav.Link href="#action2" className="text-white nevtour">Manage Oders</Nav.Link>
                            </NavLink>

                            <NavLink to="/addNewServices" className="nevuderline">
                                <Nav.Link href="#action2" className="text-white nevtour">Add Services</Nav.Link>
                            </NavLink>

                            <Button variant="outline-light">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
};

export default Header;