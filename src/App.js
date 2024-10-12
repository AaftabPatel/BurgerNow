import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Size from './components/Size';
import Fillings from './components/Fillings';
import AddOn from './components/AddOn';
import Complement from './components/Complement';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [burger, setBurger] = useState({ base: "", fillings: [], addons: [], complements : [] });
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const addSize = (size) => {
    setBurger({ ...burger, size })
  }
  
  const addFilling = (filling) => {
    let newFillings;
    if(!burger.fillings.includes(filling)){
      newFillings = [...burger.fillings, filling];
    } else {
      newFillings = burger.fillings.filter(item => item !== filling);
    }
    setBurger({ ...burger, fillings: newFillings });
  }

  const addAddOn = (addon) => {
    let newAddOns;
    if(!burger.fillings.includes(addon)){
      newAddOns = [...burger.addons, addon];
    } else {
      newAddOns = burger.addons.filter(item => item !== addon);
    }
    setBurger({ ...burger, addons: newAddOns });
  }

  const addComplement = (complement) => {
    let newComplement;
    if(!burger.complements.includes(complement)){
      newComplement = [...burger.complements, complement];
    } else {
      newComplement = burger.complements.filter(item => item !== complement);
    }
    setBurger({ ...burger, complements: newComplement });
  }

  return (
    <>
    <div className='appContainer'>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence mode='wait' onExitComplete={() => setShowModal(false)} >
      <Routes location={location} key={location.key}>
        <Route path="/Size" element={<Size addSize={addSize} burger={burger} />} />
        <Route path="/Fillings" element={<Fillings addFilling={addFilling} burger={burger} />} />
        <Route path="/Addon" element={<AddOn addAddOn={addAddOn} burger={burger} />} />
        <Route path="/Complement" element={<Complement addComplement={addComplement} burger={burger} />} />
        <Route path="/order" element={<Order burger={burger} setShowModal={setShowModal}/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      </ AnimatePresence>
    </ div>
    <Features />
    <About />
    <Contact />
    <Footer />
    </>
  );
}

export default App;