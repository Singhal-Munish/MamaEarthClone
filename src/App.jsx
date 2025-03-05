import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
// import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import NoMatch from './Pages/NoMatch';
import NavigationBar from './Components/NavigationBar';
import { expInfoContext } from './Components/Context/AppContext';
import InfoBar from './Components/InfoBar';

function App() {
  const [moreBtn, setMoreBtn] = useState(0)
  return (
    <>
      <expInfoContext.Provider value={ {moreBtn, setMoreBtn} }>
        <InfoBar />
        <NavigationBar />
        {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NoMatch />}/>
        </Routes>       */}
        <Home />
        {/* <Footer /> */}
      </expInfoContext.Provider>
    </>
  )
}

export default App