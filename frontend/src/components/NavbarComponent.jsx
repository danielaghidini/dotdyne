import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../assets/images/dotdyne.svg';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="/"><Logo width="400" height="100" className="navbar-logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
                <Nav className="ms-auto me-5">
                    <NavDropdown title="Conta" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="/settings">Configurações</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Sair</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/projects">Projetos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
