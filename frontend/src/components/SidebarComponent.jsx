import React from 'react';
import { Nav } from 'react-bootstrap';

const SidebarComponent = () => {
    return (
        <div className="sidebar">
            <Nav defaultActiveKey="/dashboard" className="flex-column">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/projects">Projetos</Nav.Link>
                <Nav.Link href="/teams">Equipes</Nav.Link>
                <Nav.Link href="/calendar">Calendário</Nav.Link>
                <Nav.Link href="/settings">Configurações</Nav.Link>
            </Nav>
        </div>
    );
}

export default SidebarComponent;
