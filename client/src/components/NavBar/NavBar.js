import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const NavBar = () => {
    const {isAuthenticated, userEmail} = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><FontAwesomeIcon icon={faBlog} />  Blog App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/*<Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>*/}
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        {isAuthenticated && (
                            <>
                                <Nav.Link>{userEmail}</Nav.Link>
                                <Nav.Link href="/catalog">Catalog</Nav.Link>
                                <Nav.Link href="/logout">Logout</Nav.Link>
                            </>
                        )}

                        {!isAuthenticated && (
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </>
                        )}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};