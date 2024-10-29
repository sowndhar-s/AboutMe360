import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Works from './components/Works';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <React.Fragment>
      <Header/>
      <About/>
      <Education/>
      <Works/>
      <Hobbies/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
