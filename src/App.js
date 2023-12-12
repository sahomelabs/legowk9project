import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import Banner from './components/Banner';



function App() {
  return (
    <div className="App">
      
      <Banner />
      <Header />
      <Main />
      <Footer />
    
    </div>
  );
}

export default App;
