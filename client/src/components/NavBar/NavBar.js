import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const NavBar = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><FontAwesomeIcon icon={faBlog} />  Blog App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               
                <nav id='navbar'>
                    {isAuthenticated && (
                        <div id="user">
                            <Link className={styles.btnNav} to="/">Home</Link>
                            <Link className={styles.btnNav} to="/create-post">Create Post</Link>
                            <Link className={styles.btnNav} to="/userInfo">{userEmail}</Link>
                            <Link className={styles.btnNav} to="/logout">Logout</Link>
                        </div>
                    )}

                    {!isAuthenticated && (
                        <div id="guest">
                            <Link className={styles.btnNav} to="/">Home</Link>
                            <Link className={styles.btnNav} to="/login">Login</Link>
                            <Link className={styles.btnNav} to="/register">Register</Link>
                        </div>
                    )}
                </nav>

            </Container>
        </Navbar>
    );
};