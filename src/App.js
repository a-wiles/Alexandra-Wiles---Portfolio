import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import './style.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {

    return (
      <div>
       <div>
        <Header />
    </div>
    <Footer />
      </div>
    );
  }


export default App;