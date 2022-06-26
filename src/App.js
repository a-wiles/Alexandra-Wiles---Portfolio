import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
      <div>
       <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
      </div>
    );
  }


export default App;
