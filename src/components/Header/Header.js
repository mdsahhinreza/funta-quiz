import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <Navbar className='funta-bg' expand="md">
                <Container>
                    <Link className='text-decoration-none' to='/'>
                        <Navbar.Brand className='text-light fw-bolder'><FontAwesomeIcon icon={faBrain} className='text-warning fw-bolder' ></FontAwesomeIcon> Funta Quiz</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto menu">
                            <NavLink activeclassname="active" className='text-light' to='/home'>Home</NavLink>
                            <NavLink activeclassname="active" className='text-light' to='/topics'>Topics</NavLink>
                            <NavLink activeclassname="active" className='text-light' to='/statistics'>Statistics</NavLink>
                            <NavLink activeclassname="active" className='text-light' to='/blog'>Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr className='border-warning m-0' />
        </div>

    );
};

export default Header;