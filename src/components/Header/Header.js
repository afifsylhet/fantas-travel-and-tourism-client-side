import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../utilities/useAuth';
import './Header.css'


const Header = () => {
    const { user, handleSignout } = useAuth();
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
                            <div className="d-flex align-items-center text-white mx-2">
                                {user.displayName}
                            </div>
                            {
                                user.displayName ?
                                    <Button onClick={handleSignout} variant="outline-light">Logout</Button>
                                    : <Link to="/Login">
                                        <Button variant="outline-light">Login</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    );
};

export default Header;