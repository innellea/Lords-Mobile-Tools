﻿import './NavBar.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars } from 'react-icons/fa';

const NavBar = () => (
    <Navbar collapseOnSelect className='border' expand='lg'>
        <Container>
            <Navbar.Toggle
                aria-controls='responsive-navbar-nav '
                className=' custom-toggler navbar-toggler'
            >
                <FaBars />
            </Navbar.Toggle>

            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>

                    <NavDropdown title='Gear' id='collapsible-nav-dropdown'>
                        <NavDropdown.Item href='/gear/infantry'>
                            Infantry
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/gear/ranged'>
                            Ranged
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/gear/cavalry'>
                            Cavalry
                        </NavDropdown.Item>

                        <NavDropdown.Item href='/gear/mixed'>
                            Mixed
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/gear/mixed'>
                            Mixed
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title='Heroes' id='collasible-nav-dropdown'>
                        <NavDropdown.Item href='/heroes/infantry'>
                            Infantry
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/heroes/ranged'>
                            Ranged
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/heroes/cavalry'>
                            Cavalry
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/heroes/defense'>
                            Fort & Wall Defense
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                            eventKey='disabled'
                            disabled
                            href='/heroes/mixed'
                        >
                            In Development
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/familiars'>Familiars</Nav.Link>
                    <NavDropdown title='Talents' id='collasible-nav-dropdown'>
                        <NavDropdown.Item href='/heroes/infantry'>
                            Infantry
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/heroes/ranged'>
                            Ranged
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/heroes/cavalry'>
                            Cavalry
                        </NavDropdown.Item>
                        <NavDropdown.Item href='/heroes/mixed'>
                            Mixed
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='/heroes/mixed'>
                            In Development
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/'>Battle Strategies</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href='#deets'>More deets</Nav.Link>
                    <Nav.Link eventKey={2} href='#memes'>
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
export default NavBar;
