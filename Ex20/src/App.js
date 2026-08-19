import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import { renderRoutes } from './routes';
import { Navbar, Nav, Container } from 'react-bootstrap';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/products">
                                    Products
                                </Nav.Link>
                                <Nav.Link as={Link} to="/about">
                                    About
                                </Nav.Link>
                                <Nav.Link as={Link} to="/contact">
                                    Contact
                                </Nav.Link>
                                <Nav.Link as={Link} to="/users/123">
                                    User 123
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="mt-3">
                    <Routes>
                        {renderRoutes()}
                    </Routes>
                </Container>
            </div>
        </Router>
    );
};

export default App;