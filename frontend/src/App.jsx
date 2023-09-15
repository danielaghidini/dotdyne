import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import SidebarComponent from './components/SidebarComponent';
import MainContent from './components/MainContent';
import FooterComponent from './components/FooterComponent';

const App = () => {
    return (
        <div className="app-container">
            <NavbarComponent />
            <div className="body-container">
                <SidebarComponent />
                <MainContent>
                    {/* O conteúdo principal da página vai aqui */}
                </MainContent>
            </div>
            <FooterComponent />
        </div>
    );
}

export default App;
