import React from 'react';
import Contact from './components/contact/Contact';
import Handling from './components/handling/Handling';
import Navbar from './components/navar/Navbar';
import Options from './components/options/Options';
import Power from './components/power/Power';
import Speed from './components/speed/Speed';
import Contributers from './components/contributers/Contributers';

function App() {
  return (
    <>
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Options />
      <Contributers />
      <Contact />
    </>
  );
}
export default App;
