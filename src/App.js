import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support.jsx';
import Basicplan from './components/price/Basicplan.jsx'
import Premium from './components/price/Premium.jsx'
import Hotoffer from './components/price/Hotoffer.jsx'
// link
import './assets/css/responsive/homeresponsive.css'
import './assets/css/sirih-digital-wave-design-system.css';
import './assets/css/sirih-digital-wave-design-system.css.map';
import './assets/css/sirih-digital-wave-design-system.min.css';
import './assets/css/sirih-digital-wave-icons.css';
import './assets/css/sirih-digital-wave-svg.css';
import './assets/js/soft-design-system';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Beli/Basicplan" element={<Basicplan />} />
        <Route path="/Beli/Premium" element={<Premium />} />
        <Route path="/Beli/Hotoffer" element={<Hotoffer />} />
      </Routes>
    </Router>
  );
}

export default App;
