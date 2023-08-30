import './App.css';
import React from 'react';
import Navbar from './home/Navbar';
import Layout from './home/Layout'
import FoodLayout from './foodProducts/FoodLayout';
import AboutLayout from './aboutUs/AboutLayout';
import ScrollToTop from './utilities/ScrollToTop';
import ReligiousStoreLayout from './religiousStore/ReligiousStoreLayout';
import SubsidisedLayout from './SubsidisedFood/SubsidisedLayout';
import SocialInitiativesLayout from './socialInitiatives/SocialInitiativesLayout';
import BookPageLayout from './bookPage/BookPageLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (

    <div className="App">

      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/about' element={<AboutLayout />} />
          <Route path='/foodproducts' element={<FoodLayout />} />
          <Route path='/ReligiousStore' element={<ReligiousStoreLayout />} />
          <Route path='/Books' element={<BookPageLayout />} />
          <Route path='/SubsidizedFood' element={<SubsidisedLayout />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
