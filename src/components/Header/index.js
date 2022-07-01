import React, { useState } from 'react';
import '../../App.css';
import About from '../About';
import Contact from '../Contact';
import Nav from '../Nav';
import Projects from '../Projects';
import Resume from '../Resume';
import Footer from '../Footer';

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
        <h1 className="titlenav">Alexandra Wiles</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
      </div>
    );
  }


export default App;