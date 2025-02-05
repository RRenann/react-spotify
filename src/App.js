import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';
import Library from './Library/Library';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
        <Library />
      </div>
      <div className="main-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;